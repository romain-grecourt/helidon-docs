Type:
[io.helidon.http.media.jackson.JacksonSupport](https://helidon.io/docs/v4/apidocs/io.helidon.http.media.jackson/io/helidon/http/media/jackson/JacksonSupport.html)

Config key:
```text
jackson
```

This type provides the following service implementations:

- `io.helidon.http.media.spi.MediaSupportProvider`

# Configuration options

| key | type | default value | description |
|----|----|----|----|
| `name` | string | `jackson` | Name of the support. Default value is `jackson`. |
| `properties` | Map\<string, boolean\> |  | Jackson configuration properties. Properties are being ignored if specific JacksonSupport is set. Only `boolean` configuration values are supported. |

Optional configuration options
