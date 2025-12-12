# Overview

Helidon declarative programming model allows inversion of control style
programming with all the performance benefits of Helidon SE.

Our declarative approach has the following advantages:

- Uses Helidon SE imperative code to implement features (i.e.
  performance is same as "pure" imperative application)

- Generates all the necessary code at build-time, to avoid reflection
  and bytecode manipulation at runtime

- It is based on [Helidon Injection](injection.md#overview)

- Declarative features are in the same modules as Helidon SE features
  (i.e. does not require additional dependencies)

> [!NOTE]
> Helidon Declarative is an incubating feature. The APIs shown here are
> subject to change. These APIs will be finalized in a future release of
> Helidon.

# Usage

To create a declarative application, use the annotations provided in our
Helidon SE modules (details under [Features](#features)), and the maven
plugin described in [Injection: Startup](injection.md#startup)
to generate the binding.

In addition, the following section must be added to the `build` of the
Maven `pom.xml` to enable annotation processors that generate the
necessary code:

```xml
<plugins>
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
            <annotationProcessorPaths>
                <path>
                    <groupId>io.helidon.bundles</groupId>
                    <artifactId>helidon-bundles-apt</artifactId>
                    <version>${helidon.version}</version>
                </path>
            </annotationProcessorPaths>
        </configuration>
    </plugin>
</plugins>
```

# Features

The following features are currently implemented:

- [Configuration](#configuration)
- [HTTP Server Endpoint](#http-server-endpoint)
- [Typed HTTP Client](#typed-http-client)
- [Fault Tolerance](#fault-tolerance)
- [Scheduling](#scheduling)
- [Validation](#validation)
- [Security](#security)
- [Metrics](#metrics)

A Helidon Declarative application should be started using the generated
application binding, to ensure no lookup and no reflection. The call to
`ServiceRegistryManager.start` ensures that all services with a defined
`RunLevel` are started, including Helidon WebServer, Scheduled services
etc.

Example of a declarative main class:
```java
@Service.GenerateBinding // generated binding to bypass discovery and runtime binding
public static class Main {
    public static void main(String[] args) {
        // configure logging
        LogConfig.configureRuntime();

        // start the "container"
        ServiceRegistryManager.start(ApplicationBinding.create());
    }
}
```

## Configuration

Configuration can be injected as a whole into any service, or a specific
configuration option can be injected using `@Configuration.Value`.
Default values can be defined using annotations in `@Default`

Services available for injection:

- [`Config`][config]

Annotations:

| Type                                    | Description                                                       |
|-----------------------------------------|-------------------------------------------------------------------|
| [`@Configuration.Value`][configuration] | define the configuration key to inject, on constructor parameter  |
| [`@Default.@Value`][default-value]      | define a default string value, on the same constructor parameter  |
| [`@Default.@Int`][default-int]          | define a default int value, on the same constructor parameter     |
| [`@Default.@Long`][default-long]        | define a default long value, on the same constructor parameter    |
| [`@Default.@Double`][default-double]    | define a default double value, on the same constructor parameter  |
| [`@Default.@Boolean`][default-boolean]  | define a default boolean value, on the same constructor parameter |

Example of usage can be seen below in HTTP Server Endpoint example.

## HTTP Server Endpoint

To create an HTTP endpoint, simply annotate a class with
`@RestServer.Endpoint`, and add at least one method annotated with one
of the HTTP method annotations, such as `@Http.GET`.

Services available for injection:

N/A

Supported method parameters (no annotation required):

| Type                                         | Description                                      |
|----------------------------------------------|--------------------------------------------------|
| [`ServerRequest`][server-request]            | Server request                                   |
| [`ServerResponse`][server-response]          | Server response                                  |
| [`Context`][context]                         | Propagated context                               |
| [`SecurityContext`][common-security-context] | Common Security context                          |
| [`SecurityContext`][security-context]        | If `helidon-security` module is on the classpath |

Annotations on endpoint type:

| Annotation                                                  | Description                                                     |
|-------------------------------------------------------------|-----------------------------------------------------------------|
| [`@RestServer.Endpoint`][rest-server-endpoint]              | Required annotation                                             |
| [`@RestServer.Listener`][rest-server-listener]              | Defines the named listener (port/socket) to be served on        |
| [`@RestServer.Header`][rest-server-header]                  | Header to return with each response from this endpoint          |
| [`@RestServer.ComputedHeader`][rest-server-computed-header] | Computed header to return with each response from this endpoint |
| [`@Http.Path`][http-path]                                   | Path (context) this endpoint will be available on               |

Annotations on endpoint methods:

| Annotation                                                  | Description                                                   |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`@RestServer.Header`][rest-server-header]                  | Header to return with each response from this method          |
| [`@RestServer.ComputedHeader`][rest-server-computed-header] | Computed header to return with each response from this method |
| [`@RestServer.Status`][rest-server-status]                  | Status to return (if a custom one is required)                |
| [`@Http.Path`][http-path]                                   | Subpath of the endpoint path (context)                        |
| [`@Http.GET`][http-get]                                     | Definition of an HTTP GET method                              |
| [`@Http.PUT`][http-put]                                     | Definition of an HTTP PUT method                              |
| [`@Http.POST`][http-post]                                   | Definition of an HTTP POST method                             |
| [`@Http.DELETE`][http-delete]                               | Definition of an HTTP DELETE method                           |
| [`@Http.HEAD`][http-head]                                   | Definition of an HTTP HEAD method                             |
| [`@Http.PATCH`][http-patch]                                 | Definition of an HTTP PATCH method                            |
| [`@Http.HttpMethod`][http-http-method]                      | Custom HTTP method names                                      |
| [`@Http.Produces`][http-produces]                           | Produced Content-Type                                         |
| [`@Http.Consumes`][http-consumes]                           | Consumed Content-Type                                         |

Annotations on method parameters:

| Annotation                               | Description                                   |
|------------------------------------------|-----------------------------------------------|
| [`@Http.Entity`][http-entity]            | Request entity, a typed parameter is expected |
| [`@Http.HeaderParam`][http-header-param] | Typed HTTP request header value               |
| [`@Http.QueryParam`][http-query-param]   | Typed HTTP query value                        |
| [`@Http.PathParam`][http-path-param]     | Typed parameter from path template            |

Example of an HTTP Server Endpoint:
```java
@RestServer.Endpoint // identifies this class as a server endpoint
@Http.Path("/greet") // serve this endpoint on /greet context root (path)
@Service.Singleton   // a singleton service (single instance within a service registry)
class GreetEndpoint {
    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Map.of());
    private final String greeting;

    // inject app.greeting configuration value, use "Hello" if not configured
    GreetEndpoint(@Configuration.Value("app.greeting") @Default.Value("Hello") String greeting) {
        this.greeting = greeting;
    }

    @Http.GET // HTTP GET endpoint
    @Http.Produces(MediaTypes.APPLICATION_JSON_VALUE) // produces entity of application/json media type
    JsonObject getDefaultMessageHandler() {
        // build the JSON object (requires helidon-http-media-jsonp on classpath)
        return JSON.createObjectBuilder()
                .add("message", greeting + " World!")
                .build();
    }
}
```

## Typed HTTP Client

To create a typed HTTP client, create an interface annotated with
`@RestClient.Endpoint`, and at least one method annotated with one fo the
HTTP method annotations, such as `@Http.GET`. Methods can only have
parameters annotated with one of the `Http` qualifiers.

Annotations on endpoint type:

| Annotation                                                  | Description                                                  |
|-------------------------------------------------------------|--------------------------------------------------------------|
| [`@RestClient.Endpoint`][rest-client-endpoint]              | Required annotation                                          |
| [`@Http.Path`][http-path]                                   | Path (context) the server listens on                         |
| [`@RestClient.Header`][rest-client-header]                  | Header to include in every request to the server             |
| [`@RestClient.ComputedHeader`][rest-client-computed-header] | Header to compute and include in every request to the server |

Annotations on endpoint methods:

| Annotation                                                  | Description                                                  |
|-------------------------------------------------------------|--------------------------------------------------------------|
| [`@RestClient.Header`][rest-client-header]                  | Header to include in every request to the server             |
| [`@RestClient.ComputedHeader`][rest-client-computed-header] | Header to compute and include in every request to the server |
| [`@Http.Path`][http-path]                                   | Subpath of the endpoint path (context)                       |
| [`@Http.GET`][http-get]                                     | Definition of an HTTP GET method                             |
| [`@Http.PUT`][http-put]                                     | Definition of an HTTP PUT method                             |
| [`@Http.POST`][http-post]                                   | Definition of an HTTP POST method                            |
| [`@Http.DELETE`][http-delete]                               | Definition of an HTTP DELETE method                          |
| [`@Http.HEAD`][http-head]                                   | Definition of an HTTP HEAD method                            |
| [`@Http.PATCH`][http-patch]                                 | Definition of an HTTP PATCH method                           |
| [`@Http.HttpMethod`][http-http-method]                      | Custom HTTP method                                           |
| [`@Http.Produces`][http-produces]                           | Produced Content-Type                                        |
| [`@Http.Consumes`][http-consumes]                           | Consumed Content-Type                                        |

Annotations on method parameters:

| Annotation                               | Description                                                     |
|------------------------------------------|-----------------------------------------------------------------|
| [`@Http.Entity`][http-entity]            | Request entity, a typed parameter is expected                   |
| [`@Http.HeaderParam`][http-header-param] | Typed HTTP header value to send                                 |
| [`@Http.QueryParam`][http-query-param]   | Typed HTTP query value to send                                  |
| [`@Http.PathParam`][http-path-param]     | Typed parameter from path template to construct the request URI |

Example of a Typed HTTP Client:
```java
@RestClient.Endpoint("${greet-service.client.uri:http://localhost:8080}")
@RestClient.Header(name = HeaderNames.USER_AGENT_NAME, value = "my-client")
interface GreetClient {
    @Http.GET
    @Http.Produces(MediaTypes.APPLICATION_JSON_VALUE)
    JsonObject getDefaultMessageHandler();
}
```

## Fault Tolerance

Fault tolerance annotations allow adding features to methods on
services. The annotations can be added to any method that supports
interception (i.e. methods that are not private).

Method Annotations:

| Annotation                                 | Description                              |
|--------------------------------------------|------------------------------------------|
| [`@Ft.Retry`][ft-retry]                    | Allow retries                            |
| [`@Ft.Fallback`][ft-fallback]              | Fallback to another method that provides |
| [`@Ft.Async`][ft-async]                    | Invoke method asynchronously             |
| [`@Ft.Timeout`][ft-timeout]                | Invoke method with a timeout             |
| [`@Ft.Bulkhead`][ft-bulkhead]              | Use bulkhead                             |
| [`@Ft.CircuitBreaker`][ft-circuit-breaker] | Use circuit breaker                      |

Example of Fault Tolerance Fallback:
```java
@Service.Singleton
static class AlgorithmService {
    @Ft.Fallback(value = "fallbackAlgorithm", applyOn = IOException.class)
    String algorithm() throws IOException {
        // may throw an exception
        return "some-algorithm";
    }

    // method that would be called if algorithm() fails with an IOException
    String fallbackAlgorithm() {
        return "default";
    }
}
```

## Scheduling

Scheduling allows service methods to be invoked periodically.

Method annotations:

| Annotation                                       | Description                                        |
|--------------------------------------------------|----------------------------------------------------|
| [`@Scheduling.Cron`][scheduling-cron]            | Execute with schedule defined by a CRON expression |
| [`@Scheduling.FixedRate`][scheduling-fixed-rate] | Execute with a fixed interval                      |

Example of a fixed rate scheduled method:
```java
@Service.Singleton
static class CacheService {
    @Scheduling.FixedRate("PT5S")
    void checkCache() {
        // do something every 5 seconds
    }
}
```

## Validation

Validation provides an ability to validate service method parameters and
return types. This is achieved through constraint annotations and type
validation.

To use validation, the proper dependency must be added to your
`pom.xml`, and an annotation processor must be configured to code
generate the required classes. The annotation processor is part of the
bundle mentioned in Helidon Declarative introduction above.

Helidon validation module:

```xml
<dependency>
    <groupId>io.helidon.validation</groupId>
    <artifactId>helidon-validation</artifactId>
</dependency>
```

### Constraint Annotations

A "Constraint Annotation" is any annotation directly annotated with
`@Validation`. Helidon Validation provides a set of
built-in validation constraints, though custom constraints can be
created, or existing constraints can be combined.

Constraints for any type:

| Annotation                                   | Description      |
|----------------------------------------------|------------------|
| [`@Validation.NotNull`][validation-not-null] | Must not be null |
| [`@Validation.Null`][validation-null]        | Must be null     |

Constraints for `String` and `CharSequence`:

| Annotation                                                   | Description                                              |
|--------------------------------------------------------------|----------------------------------------------------------|
| [`@Validation.Email`][validation-string-email]               | Matches an e-mail structure (basic check only)           |
| [`@Validation.String.NotBlank`][validation-string-not-blank] | Must not be blank (empty or only white-space characters) |
| [`@Validation.String.NotEmpty`][validation-string-not-empty] | Must not be empty (i.e. length is `0`)                   |
| [`@Validation.String.Length`][validation-string-length]      | Check for maximal (and optionally minimal) length        |
| [`@Validation.String.Pattern`][validation-string-pattern]    | Check against a regular expression                       |

Constraints for types that extend `java.lang.Number`. These constraints
accept any such type, though all types are eventually converted to a
`BigDecimal` and the checks are done against the result. `Byte` is
always converted as an unsigned number, i.e. its values are from `0` to
`255` inclusive.

| Annotation                                                                | Description                                                                        |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`@Validation.Number.Negative`][validation-number-negative]               | The value must be negative (`< 0`)                                                 |
| [`@Validation.Number.NegativeOrZero`][validation-number-negative-or-zero] | The value must be negative or zero (`<= 0`)                                        |
| [`@Validation.Number.Positive`][validation-number-positive]               | The value must be positive (`> 0`)                                                 |
| [`@Validation.Number.PositiveOrZero`][validation-number-positive-or-zero] | The value must be positive or zero (`>= 0`)                                        |
| [`@Validation.Number.Min`][validation-number-min]                         | The value must be greater or equal (`>= min`), value is specified as a `String`    |
| [`@Validation.Number.Max`][validation-number-max]                         | The value must be lower or equal (`<= max`), value is defined as a `String`        |
| [`@Validation.Number.Digits`][validation-number-digits]                   | The number must have at most the specified number of integer and fractional digits |

Constraints for `Integer` data types. These constraints accept
`int, long, byte, char, short` and their boxed counterparts. `byte` is
always converted as an unsigned number, i.e. its values are from `0` to
`255` inclusive.

These are convenience annotation that use `int` data type:

| Annotation                                          | Description                                                       |
|-----------------------------------------------------|-------------------------------------------------------------------|
| [`@Validation.Integer.Min`][validation-integer-min] | The value must be at least the specified minimal value (`>= min`) |
| [`@Validation.Integer.Max`][validation-integer-max] | The value must be at most the specified maximal value (`<= max`)  |

Constraints for `Long` and `long` data types. No other type is
supported:

| Annotation                                    | Description                                                       |
|-----------------------------------------------|-------------------------------------------------------------------|
| [`@Validation.Long.Min`][validation-long-min] | The value must be at least the specified minimal value (`>= min`) |
| [`@Validation.Long.Max`][validation-long-max] | The value must be at most the specified maximal value (`<= max`)  |

Constraints for `Boolean` and `boolean` data type. No other type is
supported:

| Annotation                                              | Description               |
|---------------------------------------------------------|---------------------------|
| [`@Validation.Boolean.True`][validation-boolean-true]   | The value must be `true`  |
| [`@Validation.Boolean.False`][validation-boolean-false] | The value must be `false` |

Constraints for collection and map data types:


| Annotation                                                  | Description                                                         |
|-------------------------------------------------------------|---------------------------------------------------------------------|
| [`@Validation.Collection.Size`][validation-collection-size] | The size of the collection or map must within the range (inclusive) |

Constraints for calendar/time data types. Behavior depends on the
specific type - for example for `Year` data type, past is previous year,
future is the next year, and present is the current year, regardless of
which month it is. When using `Instant`, past is already the last
millisecond.

| Annotation                                                                      | Description                            |
|---------------------------------------------------------------------------------|----------------------------------------|
| [`@Validation.Calendar.Future`][validation-calendar-future]                     | The value must be in the future        |
| [`@Validation.Calendar.FutureOrPresent`][validation-calendar-future-or-present] | The value must be in the future or now |
| [`@Validation.Calendar.Past`][validation-calendar-past]                         | The value must be in the past          |
| [`@Validation.Calendar.PastOrPresent`][validation-calendar-past-or-present]     | The value must be in the past or now   |

Supported types for calendar/time validations:

- `java.util.Date`
- `java.util.Calendar`
- `java.time.Instant`
- `java.time.LocalDate`
- `java.time.LocalDateTime`
- `java.time.LocalTime`
- `java.time.MonthDay`
- `java.time.OffsetDateTime`
- `java.time.OffsetTime`
- `java.time.Year`
- `java.time.YearMonth`
- `java.time.ZonedDateTime`
- `java.time.chrono.HijrahDate`
- `java.time.chrono.JapaneseDate`
- `java.time.chrono.MinguoDate`
- `java.time.chrono.ThaiBuddhistDate`

### Type Validation

A type annotated with `@Validation.Validated` will have validation code
generated.

Usage of that type can be marked with `@Validation.Valid` -
if such an annotation is present, and it is on a field of another
validated type, or it is a parameter, return type, or a type argument of
a parameter/return type for a service method, the object instance will be
validated using a generated interceptor.

### Usage

Example of a validated type:
```java
@Validation.Validated
record MyType(@Validation.String.Pattern(".*valid.*") @Validation.NotNull String validString,
              @Validation.Integer.Min(42) int validInt) {
}
```

Example of a validated method call using a validated type:
```java
@Service.Singleton
static class ValidatedService {
    @Validation.String.NotBlank // validates the response
    String process(@Validation.Valid @Validation.NotNull MyType myType) {
        // result of the logic
        return "some result";
    }
}
```

A custom "compound" annotation can be created to simplify usage:
```java
@Validation.NotNull
@Validation.String.NotBlank
public @interface NonNullNotBlank {
}
```

A custom constraint annotation can be created (and act as a compound
annotation as well).

Example of a custom constraint annotation:
```java
@Validation.NotNull // will add not-null constraint as well
@Validation.Constraint
public @interface CustomConstraint {
}
```

For each constraint annotation, there MUST be a service that validates
it.

Example of constraint validation provider:
```java
@Service.Singleton
@Service.NamedByType(CustomConstraint.class)
class CustomConstraintValidatorProvider implements ConstraintValidatorProvider {
    @Override
    public ConstraintValidator create(TypeName typeName, Annotation constraintAnnotation) {
        // we could Validation the type here, but we don't need to - depends on constraint
        return new CustomValidator(constraintAnnotation);
    }

    record CustomValidator(Annotation annotation) implements ConstraintValidator {
        @Override
        public ValidatorResponse check(ValidatorContext context, Object value) {
            if (value == null) {
                // we leave the `not-null` Validation to the "meta-annotation" on CustomConstraint
                return ValidatorResponse.create();
            }

            // if a string, and the value is "good", it is OK
            if (value instanceof String str) {
                if (str.equals("good")) {
                    return ValidatorResponse.create();
                }
            }

            return ValidatorResponse.create(annotation, "Must be \"good\" string", value);
        }
    }
}
```

## Security

Security provides protection of WebServer endpoints.

Identity propagation (when using a WebClient) depends on configuration
of the client and configuration of security. We currently do not have a
declarative way of modifying client behavior.

Supported annotations:

| Annotation                                              | Description                                                                                   |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`@Authenticated`][security-authenticated]              | Mark an endpoint or a method as requiring authentication                                      |
| [`@Authorized`][security-authorized]                    | Mark an endpoint or a method as requiring authorization                                       |
| [`@Audited`][security-audited]                          | Mark an endpoint or a method as requiring audit logging                                       |
| [`@RoleValidator.PermitAll`][role-validator-permit-all] | Annotated method does not require any authentication or authorization (even if endpoint does) |
| [`@PermitAll`][jakarta-permit-all]                      | Same as [`RoleValidator.PermitAll`][role-validator-permit-all]                                |
| [`@DenyAll`][jakarta-deny-all]                          | Annotated method will not be callable with any kind of authentication or authorization        |
| [`@RoleValidator.Roles`][role-validator-roles]          | Provide a set of roles that can access a resource, implies authentication is required         |
| [`RolesAllowed`][jakarta-roles-allowed]                 | Same as [`RoleValidator.Roles`][role-validator-roles]                                         |

## Metrics

Add support for the following meters:

- Counter
- Timer
- Gauge

Type annotations:

| Annotation                    | Description                           |
|-------------------------------|---------------------------------------|
| [`@Metrics.Tag`][metrics-tag] | Tags added to all metrics on the type |

Method annotations:

| Annotation                            | Description                                                        |
|---------------------------------------|--------------------------------------------------------------------|
| [`@Metrics.Counted`][metrics-counted] | Adds a counter metric to the metric registry for method executions |
| [`@Metrics.Timed`][metrics-timed]     | Adds a timer metric to the metric registry for method executions   |
| [`@Metrics.Gauge`][metrics-gauge]     | Marks a method that returns a number as a gauge                    |
| [`@Metrics.Tag`][metrics-tag]         | Tags added to all metrics on the method                            |

The example below shows additional tags. The counter on method `counted`
will have the following tags: `service=Metered;method=counted` (and of
course the scope tag that is always added).

Example of a counted method with type tags and counter tags:
```java
@Service.Singleton
@Metrics.Tag(key = "service", value = "Metered")
static class MeteredService {
    @Metrics.Counted(tags = @Metrics.Tag(key = "method", value = "counted"))
    void counted() {
        // whenever invoked through service interface, counter is incremented
    }
}
```

A gauge is a method that returns a `Number`, and is invoked by the
metrics implementation to obtain a value. Example below shows a
definition of a `Gauge`. Note that a `unit` is mandatory for gauges.

Example of a gauge:
```java
@Service.Singleton
static class ServiceWithAGauge {
    private volatile int percentage = 0;

    @Metrics.Gauge(unit = "percent")
    int gauge() {
        return this.percentage;
    }
}
```

[context]: https://helidon.io/docs/v4/apidocs/io.helidon.common.context/io/helidon/common/context/Context.html
[common-security-context]: https://helidon.io/docs/v4/apidocs/io.helidon.common.security/io/helidon/common/security/SecurityContext.html
[default-value]: https://helidon.io/docs/v4/apidocs/io.helidon.common/io/helidon/common/Default.Value.html
[default-int]: https://helidon.io/docs/v4/apidocs/io.helidon.common/io/helidon/common/Default.Int.html
[default-long]: https://helidon.io/docs/v4/apidocs/io.helidon.common/io/helidon/common/Default.Long.html
[default-double]: https://helidon.io/docs/v4/apidocs/io.helidon.common/io/helidon/common/Default.Double.html
[default-boolean]: https://helidon.io/docs/v4/apidocs/io.helidon.common/io/helidon/common/Default.Boolean.html
[config]: https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/Config.html
[configuration]: https://helidon.io/docs/v4/apidocs/io.helidon.config/io/helidon/config/Configuration.html
[ft-async]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.Async.html
[ft-bulkhead]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.Bulkhead.html
[ft-circuit-breaker]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.CircuitBreaker.html
[ft-fallback]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.Fallback.html
[ft-retry]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.Retry.html
[ft-timeout]: https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Ft.Timeout.html
[jakarta-roles-allowed]: https://jakarta.ee/specifications/annotations/2.1/apidocs/jakarta.annotation/jakarta/annotation/security/rolesallowed
[jakarta-permit-all]: https://jakarta.ee/specifications/annotations/2.1/apidocs/jakarta.annotation/jakarta/annotation/security/permitall
[jakarta-deny-all]: https://jakarta.ee/specifications/annotations/2.1/apidocs/jakarta.annotation/jakarta/annotation/security/denyall
[http-consumes]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.Consumes.html
[http-entity]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.Entity.html
[http-get]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.GET.html
[http-put]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.PUT.html
[http-post]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.POST.html
[http-delete]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.DELETE.html
[http-head]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.HEAD.html
[http-patch]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.PATCH.html
[http-header-param]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.HeaderParam.html
[http-http-method]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.HttpMethod.html
[http-path]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.Path.html
[http-path-param]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.PathParam.html
[http-produces]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.Produces.html
[http-query-param]: https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/Http.QueryParam.html
[metrics-counted]: https://helidon.io/docs/v4/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/Metrics.Counted.html
[metrics-gauge]: https://helidon.io/docs/v4/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/Metrics.Gauge.html
[metrics-tag]: https://helidon.io/docs/v4/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/Metrics.Tag.html
[metrics-timed]: https://helidon.io/docs/v4/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/Metrics.Timed.html
[scheduling-cron]: https://helidon.io/docs/v4/apidocs/io.helidon.scheduling/io/helidon/scheduling/Scheduling.Cron.html
[scheduling-fixed-rate]: https://helidon.io/docs/v4/apidocs/io.helidon.scheduling/io/helidon/scheduling/Scheduling.FixedRate.html
[role-validator-permit-all]: https://helidon.io/docs/v4/apidocs/io.helidon.security/io/helidon/security/abac/role/RoleValidator.PermitAll.html
[role-validator-roles]: https://helidon.io/docs/v4/apidocs/io.helidon.security/io/helidon/security/abac/role/RoleValidator.Roles.html
[security-context]: https://helidon.io/docs/v4/apidocs/io.helidon.security/io/helidon/security/SecurityContext.html`
[validation-boolean-false]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Boolean.False.html
[validation-boolean-true]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Boolean.True.html
[validation-calendar-future]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Calendar.Future.html
[validation-calendar-future-or-present]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Calendar.FutureOrPresent.html
[validation-calendar-past]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Calendar.Past.html
[validation-calendar-past-or-present]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Calendar.PastOrPresent.html
[validation-collection-size]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Collection.Size.html
[validation-integer-max]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Integer.Max.html
[validation-integer-min]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Integer.Min.html
[validation-long-max]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Long.Max.html
[validation-long-min]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Long.Min.html
[validation-not-null]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.NotNull.html
[validation-null]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Null.html
[validation-number-digits]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.Digits.html
[validation-number-max]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.Max.html
[validation-number-min]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.Min.html
[validation-number-negative]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.Negative.html
[validation-number-negative-or-zero]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.NegativeOrZero.html
[validation-number-positive]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.Positive.html
[validation-number-positive-or-zero]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.Number.PositiveOrZero.html
[validation-string-email]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.String.Email.html
[validation-string-length]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.String.Length.html
[validation-string-not-blank]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.String.NotBlank.html
[validation-string-not-empty]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.String.NotEmpty.html
[validation-string-pattern]: https://helidon.io/docs/v4/apidocs/io.helidon.validation/io/helidon/validation/Validation.String.Pattern.html
[rest-client-computed-header]: https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/RestClient.ComputedHeader.html
[rest-client-endpoint]: https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/RestClient.Endpoint.html
[rest-client-header]: https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/RestClient.Header.html
[rest-server-computed-header]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/RestServer.ComputedHeader.html
[rest-server-endpoint]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/RestServer.Endpoint.html
[rest-server-header]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/RestServer.Header.html
[rest-server-listener]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/RestServer.Listener.html
[rest-server-status]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/RestServer.Status.html
[security-audited]: https://helidon.io/docs/v4/apidocs/io.helidon.security.annotations/io/helidon/security/annotations/Audited.html
[security-authenticated]: https://helidon.io/docs/v4/apidocs/io.helidon.security.annotations/io/helidon/security/annotations/Authenticated.html
[security-authorized]: https://helidon.io/docs/v4/apidocs/io.helidon.security.annotations/io/helidon/security/annotations/Authorized.html
[server-request]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/ServerRequest.html
[server-response]: https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/http/ServerResponse.html
