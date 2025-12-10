Type:
[io.helidon.webserver.observe.info.InfoObserver](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.observe.info/io/helidon/webserver/observe/info/InfoObserver.html)

Config key:
```text
info
```

This type provides the following service implementations:

- `io.helidon.webserver.observe.spi.ObserveProvider`

# Configuration options

| key        | type                  | default value | description                                             |
|------------|-----------------------|---------------|---------------------------------------------------------|
| `endpoint` | string                | `info`        |                                                         |
| `values`   | Map\<string, string\> |               | Values to be exposed using this observability endpoint. |

Optional configuration options
