# Overview

This section discusses several advanced topics related to Helidon
configuration.

# Advanced Config Sources

## Environment Variables Config Source

The config system supports using environment variables as a config
source, and is enabled by default. Since environment variable names are
normally restricted to alphanumeric characters and underscore, this
config source *adds* aliases that enable setting or overriding config
entries with dotted and/or hyphenated keys.

The mapping makes it possible to set or override a config entry with a
key of `"foo.bar"` using an environment variable named `"FOO_BAR"` and
`"foo.bar-baz"` using `"FOO_BAR_dash_BAZ"`.

One use case for this mapping is config overrides in containers, where
passing environment variables directly or via Kubernetes
Secrets/ConfigMaps is common. Scripts that solve the mapping problem by
explicitly converting variables to system properties can also be
simplified.

Aliases are produced for any environment variable name that matches
*all* the following:

1.  does not begin or end with a `'_'` character
2.  does not contain `"__"`
3.  contains one or more `'_'` characters

For each such name, two aliases are added with the names mapped as
follows:

1.  Replace any `"_dash_"` or `"_DASH_"` substrings with `"-"`, e.g.
    `"APP_PAGE_dash_SIZE"` becomes `"APP_PAGE-SIZE"`.

2.  Replace `'_'` with `'.'` and add as an alias, e.g. `"APP_GREETING"`
    is added as `"APP.GREETING"` and `"APP_PAGE-SIZE"` is added as
    `"APP.PAGE-SIZE"`. This mapping is added primarily to support mixed
    case config keys such as `"app.someCamelCaseKey"`.

3.  Convert the result of step 2 to lowercase and add as an alias, e.g.
    `"APP.GREETING"` is added as `"app.greeting"` and `"APP.PAGE-SIZE"`
    is added as `"app.page-size"`.

## Directory Config Source

The config system supports using a file system directory as a config
source. Each *non-directory* file in the directory becomes a config
entry: the file name is the key and the contents of that file are used
as the corresponding config `String` value.

The following example shows, for example, one way to load Kubernetes
secrets mounted on the pod’s filesystem.

If the directory `conf/secrets` contains these two files

File `secrets/username`:
```text
jose
```

File `secrets/password`:
```text
^ery$ecretP&ssword
```

Your application can load this as configuration using the `directory` config source:
```java
void snippet()() {
    var config = Config.builder(ConfigSources.directory("conf/secrets"))
            .disableEnvironmentVariablesSource()
            .disableSystemPropertiesSource()
            .build();
    System.out.println(config.get("username").asString().get()); // jose
    System.out.println(config.get("password").asString().get()); // ^ery$ecretP&ssword
}
```

Remember that your application can process the contents of a given file
as configuration. See the [config
sources](introduction.md#config-sources) section and the
[`ConfigSources.file` javadoc](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/ConfigSources.html#file(java.lang.String)).

## In-memory Config Sources

The config system provides several ways to create a `Config` tree from
data already in memory. See the [`ConfigSources` javadoc](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/ConfigSources.html)
for further details. The numerous variants of the `from` method
construct `ConfigSource` or `Builder<ConfigSource>` instances.

### `Properties` Object

```java
void snippet()() {
    var config = Config.create(
            ConfigSources.create(System.getProperties()).build());
    System.out.println(config.get("java.specification.version").asString().get()); // 21
}
```

### `String` of a Given Media Type

```java
void snippet()() {
    var config = Config.create(
            ConfigSources.create("app.greeting = Hello", MediaTypes.create("text", "x-java-properties"))
                    .build());
    System.out.println(config.get("app.greeting").asString().get()); // Hello
}
```

### `Map`

```java
void snippet()() {
    var config = Config.create(
            ConfigSources.create(Map.of("app.greeting", "Hello"))
                    .build());
    System.out.println(config.get("app.greeting").asString().get()); // Hello
}
```

### Subtree of Another `Config`

```java
void snippet()() {
    var anotherConfig = Config.create(
            ConfigSources.create(Map.of("misc.app.greeting", "Hello"))
                    .build());
    var config = Config.create(
            ConfigSources.create(anotherConfig.get("misc")));
    System.out.println(config.get("app.greeting").asString().get()); // Hello
}
```

### *ad hoc* Config Nodes

```java
void snippet()() {
    var config = Config.create(ConfigSources.create(ConfigNode.ObjectNode.builder()
            .addList("app.greeting", ConfigNode.ListNode.builder()
                    .addValue("Hi")
                    .addValue("Hello")
                    .build())
            .build()));
    System.out.println(config.get("app.greeting").asList(String.class).get()); // [Hi, Hello]
}
```

## Multi-Source Configs and Composite Config Sources

Although the examples above use a single source, you can build a single
`Config` from multiple sources.

### Handling Key Collisions

#### Prefixed Config Sources

Sometimes you might want to create a single config tree from multiple
sources but in a way that keeps the config from different sources in
different subtrees.

The config system lets you assign a prefix to all keys from a given
source, see the [`ConfigSources.prefixed` javadoc](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/ConfigSources.html#prefixed(java.lang.String,java.util.function.Supplier)).

Using `prefixed` config source:
```java
void snippet()() {
    var config = Config.create(
            ConfigSources.prefixed("app", ConfigSources.create(Map.of("greeting", "Hello"))
                    .build()));
    System.out.println(config.get("app.greeting").asString().get()); // Hello
}
```

This technique can be useful, for example, if multiple sources contain
keys that might overlap; assigning different prefixes to the keys from
different sources gives your application a way to access all config
elements distinctly even if their keys would otherwise conflict.

#### Merging Strategies

When creating config from multiple sources, it is possible that the same
key comes from multiple sources. By default, earlier sources in the list
have higher priority than later ones. This means that if the same key
appears in two or more sources, then the source earlier in the list
prevails.

The config system provides the `FallbackMergingStrategy` which
implements the default, "first wins" algorithm. You can write your own
implementation of MergingStrategy interface and use it instead to
provide a different algorithm.

Composite config source example:
```java
Config config = Config.builder()
        .addSource(file("config-file.properties"))
        .addSource(classpath("application.yaml"))
        .mergingStrategy(MergingStrategy.fallback()) 
        .build();
```

- Specifies the merging strategy. This example uses the default fallback
  merging strategy.

# Advanced Config Parsers

Config sources and parsers work together to read and translate
configuration data from some external form into the corresponding
in-memory config tree.

## How Config Chooses Parsers

Although most applications are explicit about the config sources they
use in building a `Config`, the config system often has to figure out
what parser to use. It does so by:

1.  determining, the best that it can, the media type of the source, and
2.  locating a parser that can translate that media type.

### Identifying the Media Type

#### By Inference

Most applications let the config system try to infer the media type of
the config source.

By default, config source implementations use the
`io.helidon.common.media.type.MediaTypes` API to infer the source media
type from the source, typically (but not always) based on the file type
portion of the file path. Helidon media type module has a predefined set
of mappings as configured in
`common/media-type/src/main/resources/io/helidon/common/media/type/default-media-types.properties`,
including the Config supported formats: `.properties`, `.yaml`, `.json`
and `.conf`. To handle other formats you can implement and register your
own `io.helidon.common.media.type.spi.MediaTypeDetector` Java Service
implementations. (Typically, you would also write and register a config
parser to translate that format; see [Locating a
Parser](#locating-a-parser) below.)

#### By Application Directive

Your application can specify what media type to use in interpreting a
config source. Use this if your application knows the media type but the
system might not be able to infer it correctly, either because no type
detector would recognize it or because there might be more than one
inferred media type.

Specify `mediaType` for config source:
```java
Config config = Config.create(classpath("props")
    .mediaType(MediaTypes.create("text/x-java-properties")));
```

- The config system cannot infer the media type because there is no file
  type in the path `props`.

- The developer knows the file is in Java Properties format so specifies
  the media type explicitly.

Note that a file type detector *could* be written to also inspect the
contents of the file to infer the media type. The detectors provided by
Helidon only inspect the suffix in the name of the file.

### Locating a Parser

#### By Inference from `media-type`

Each config parser reports which media types it handles. Once the config
system has determined a source’s media type, it searches the config
parsers associated with the config builder for one that recognizes that
media type. It then uses that parser to translate the config in the
source into the in-memory config tree.

The application can add one or more parsers to a `Config.Builder` using
the `addParser` method. This makes the parser available for use by the
config sources associated with that builder, but does not directly tie a
given parser to a given source. The builder uses media-type matching to
select one of the parsers registered with the builder for each source.

If the config system cannot locate a parser that matches the media-type
of a source, it throws a `ConfigException` when trying to prepare the
configuration.

#### By Application Directive

Your application can specify which parser to use for a config source.
The `AbstractConfigSourceBuilder` class exposes the `parser` method,
which accepts the `ConfigParser` to be used for that source. Several
methods on `ConfigSources` such as `classpath`, `directory`, and `file`
return this builder class.

Generally try to rely on media-type matching rather than specifying a
given parser for a given source in the application. This keeps your
application more flexible, both by insulating it from implementation
classes and by letting it easily take advantage of improvements in or
alternatives to the parsers available for a given media type.

Specify `parser` for config source:
```java
Config config = Config.create(classpath("props") 
    .parser(ConfigParsers.properties())); 
```

- The config system cannot infer the media type because there is no file
  type in the path `props`.

- The developer knows the file is in Java Properties format so specifies
  the properties parser explicitly.

## Parsing a Config Value as Config

A config value node might contain an entire config document in `String`
form, but in a format different from the containing document. Your
application can tell the config system to parse such a node as config in
a different format and replace the `String` value node in the original
tree with the config tree that results from parsing that `String`.

In this example, a YAML document contains a JSON document as a leaf.

YAML file with included JSON formatted property:
```yaml
secrets:
    username: "jose"
    password: "^ery$ecretP&ssword"

app: > 
    {
        "greeting": "Hello",
        "page-size": 20,
        "basic-range": [ -20, 20 ]
    }
```

- The property `app` is itself formatted as a JSON document.

### Specify Key-to-media-type Mapping

Specify JSON as media type for node:
```java
Config config = Config.create(classpath("application.yaml")
    .mediaTypeMapping(key ->
        "app".equals(key.toString())
                ? Optional.of(MediaTypes.APPLICATION_JSON)
                : Optional.empty()
    ));
```

- The source builder’s `mediaTypeMapping` method accepts a function
  which returns the appropriate media types (if any) for config keys.

- The function says to treat the `app` property value as a JSON document
  and leave other nodes unchanged.

- Other properties are loaded as expected.

- Property `app` is now a structured object node.

Because the function passed to `mediaTypeMapping` identifies the `app`
node as a JSON document, the config system selects the config parser
that is registered with the builder which also handles the JSON media
type.

Also, note that the config system replaces the original `String` value
node with an object node resulting from parsing that `String` value as
JSON.

### Specify Key-to-parser Mapping

Alternatively, your application could map config keys to the specific
parsers you want to use for parsing those keys' values.

Specify JSON formatted property parser instance:
```java
Config config = Config.create(classpath("application.yaml")
    .parserMapping(key -> "app".equals(key.toString()) ?
            Optional.of(HoconConfigParser.create())
            : Optional.empty()));
```

- Uses the `parserMapping` method to map keys to parser instances.

- Tells the config system to use the HOCON parser for translating the
  `String` value of the `app` key. (HOCON is a superset of JSON.)

As before, the config system replaces the value node in the containing
config tree with the config tree resulting from the additional parse.

# Config Keys with . in name

As described in the [hierarchical features
section](hierarchical-features.md#access-by-key) each config node (except
the root) has a non-null key.

> [!IMPORTANT]
> To emphasize, the dot character (“.”) has special meaning as a name
> separator in keys. To include a dot as a character in a key escape it
> as “~1”.

For example, the following configuration file contains two object nodes
with names `oracle` and `oracle.com`.

Example `application.json` with dot character in key:
```json
{
    "oracle" : {
        "com" : true
    },
    "oracle.com" : {
        "secured" : true
    }
}
```

Working with configuration with dot character in node name:
```java
void snippet()() {
    var config = Config.create(classpath("application.json"));

    // node "oracle"
    System.out.println(config.get("oracle.com").asBoolean().get()); // true
    System.out.println(config.get("oracle").get("com").asBoolean().get()); // true

    // node "oracle.com", the dot character must be escaped
    System.out.println(config.get("oracle~1com.secured").asBoolean().get()); // true
    System.out.println(config.get(Key.escapeName("oracle.com")).get("secured").asBoolean().get()); // true
}
```

# Filters, Overrides, and Token Substitution

When your application retrieves a config value, the config system can
transform it before returning the value, according to *filters*,
*overrides*, and *tokens*. The config system provides some built-in
instances of these you can use, and you can add your own as described in
the sections which describe
[filters](extensions.md#configfilter-spi) and
[overrides](extensions.md#overridesource-spi).

Your application can add filters and overrides explicitly to a config
builder and the config system by default uses the Java service loader
mechanism to locate all available filters and overrides and add them
automatically to all config builders (unless your code disables that
behavior for a given builder).

## Filters

Each filter accepts a key and the value as defined in the source, and
returns the value to be used. The filter can leave the value unchanged
or alter it, as it sees fit.

The built-in
[value-resolving](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/ConfigFilters.html#valueResolving--)
filter enables the token substitution described below.

See the
[`ConfigFilter`](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/spi/ConfigFilter.html)
javadoc for more information.

## Overrides

The overrides feature allows you to create an external document
containing key/value pairs which replace the value otherwise returned
for the name, and then add that document as an override source to a
config builder.

There are some key differences between overrides and filters.

- Because overrides are loaded from sources those sources can change
  while your application runs and so the overrides they that prescribe
  can change.

- The override document can use wildcards in key expressions.

- Overrides can affect only keys that already exist in the original
  source; filters can supply values even if the key is absent from the
  config source.

Each override entry consists of a Java properties-format definition. The
key is an expression (which can use wildcards) to match config keys read
from the current config sources, and the override value is the new value
for any key matching the key expression from that entry. Order is
important. The config system tests every key expression/value pair one
by one in the order they appear in the overrides sources. Once the
config system finds an override entry in which the key expression
matches the configuration key, the system returns that entry’s value for
the key being processed.

See the
[`OverrideSource`](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/spi/OverrideSource.html)
javadoc for more detail.

## Tokens

A token reference is a key token starting with `$`, optionally enclosed
between `{` and `}`, i.e. `$ref` or `${ref}`. Even a key composed of
more than one token can be referenced in another key, i.e. `${env.ref}`.

As an example use case, you can use token references to declare the
default values (see `resolving-tokens.yaml` below), while the references
may be resolved in another config source, which identifies a current
environment (see `env.yaml` examples below). You can then use the same
overrides for different environments, say `test` and `prod`. The
configuration in each environment is then overridden with a different
values using wildcards (see `overrides.properties` below).

Initialize `Config` with Override Definition from `overrides.properties`
file:
```java
Config config = Config.builder()
        .overrides(OverrideSources.file("conf/overrides.properties")) 
        .sources(file("conf/env.yaml"), 
                 classpath("resolving-tokens.yaml")) 
        .build();
```

- Loads *overrides* from the specified file.

- A deployment-specific environment configuration file.

- A default configuration containing token references that are resolved
  using the environment-specific override.

You can disable key and value token replacement separately as the
following example shows.

Disabling Key and Value Token Replacement:
```java
Config config = Config.builder()
        .disableKeyResolving()
        .disableValueResolving()
        // other Config builder settings
        .build();
```

# Executors for Asynchronous Config Activity

Various parts of the config system work asynchronously:

- polling strategies to detect changes to config sources,

- publishers to notify your application when such changes occur,

- `Config` instances which subscribe to and respond to change
  notifications for their underlying sources, and

- retry policies (which might wait between retries).

Each of these uses an executor to perform its work. The config system
provides default executors, but your application can specify different
ones if necessary.

## Executors for Polling Strategy

The method `PollingStrategies.regular(Duration)` returns builder for
polling strategy. This builder provides `executor` method which your
application can invoke, passing a
`java.util.concurrent.ScheduledExecutorService` instance it requires for
the polling work. By default, each polling strategy instance uses a
separate thread pool executor.

The following example shares the same executor for two different polling
strategy instances.

Customize polling strategy executors:
```java
ScheduledExecutorService executor = Executors.newScheduledThreadPool(2); 

Config config = Config.create(
        file("conf/dev.properties")
                .pollingStrategy(
                        PollingStrategies.regular(Duration.ofSeconds(2)) 
                                .executor(executor)), 
        file("conf/config.properties")
                .pollingStrategy(
                        PollingStrategies.regular(Duration.ofSeconds(5)) 
                                .executor(executor))); 
```

- Prepares a thread pool executor with core pool size set `2`.

- Selects the built-in periodic polling strategy.

- Tells the config system to use the specific executor to poll the
  `dev.properties` config source.

- Tells the config system to use the specific executor to poll the
  `config.properties` config source.

## Executors for Source Change Events

Recall that when a change watcher detects a change in a source, it
informs interested parties of the changes. By default, each
`Config.Builder` arranges for the resulting `Config` tree to use a
shared executor that reuses available threads from a pool, creating new
threads as needed. The same executor is used for actually reloading the
source.

Your application can invoke the system watcher builder’s `executor`
method to tell the builder to use a different `Executor`.

Customize config and override sources' executors:
```java
ScheduledExecutorService executor = Executors.newScheduledThreadPool(2); 

Config config = Config.builder()
        .overrides(OverrideSources
                           .file("conf/overrides.properties")
                           .changeWatcher(FileSystemWatcher.builder()
                                                  .executor(executor) 
                                                  .build()))
        .sources(file("conf/env.yaml")
                         .changeWatcher(FileSystemWatcher.builder()
                                                .executor(executor) 
                                                .build()))
        .build();
```

- Prepares a thread pool executor to be shared by selected sources.

- Tells the builder that the resulting overrides source should use the
  specified `Executor` for notifying interested parties of changes and
  for reloading the override source.

- Uses the same `Executor` and event buffer size for the config source
  as for the override source above.

## Retry Policy Custom Executor

You can control which executor a retry policy should use for its work.
The `RetryPolicies.repeat(int retries)` method returns a
[SimpleRetryPolicy.Builder](https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/SimpleRetryPolicy.Builder.html).
Your application can invoke the retry policy builder’s `executorService`
method to specify which `ScheduledExecutorService` instance it should
use to schedule and execute delayed retries. By default, the config
system uses a separate thread pool executor for each retry policy
instance.

Customize retry policy executors:
```java
ScheduledExecutorService executor = Executors.newScheduledThreadPool(2, myThreadFactory);
Config config = Config.create(
        file("conf/dev.properties")
                .optional()
                .retryPolicy(RetryPolicies.repeat(2)
                                .executorService(executor)));
```

- Prepares a thread pool executor with core pool size set to `2` and a
  custom `java.util.concurrent.ThreadFactory`.

- When the source is flagged as `optional()`, the loading attempt will
  be repeated as the retry policy defines, but an overall failure will
  *not* lead to failing the initial load or preventing the source from
  being polled if so configured.

- Uses the built-in *repeating* implementation of `RetryPolicy` that can
  be used with any config source, but typically for ones that might
  suffer brief, intermittent outages.

- Specifies the executor to use for loading and retries.
