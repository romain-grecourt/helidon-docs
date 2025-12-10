Type:
[io.helidon.http.media.gson.GsonSupport](https://helidon.io/docs/v4/apidocs/io.helidon.http.media.gson/io/helidon/http/media/gson/GsonSupport.html)

Config key:
```text
gson
```

This type provides the following service implementations:

- `io.helidon.http.media.spi.MediaSupportProvider`

# Configuration options

| key | type | default value | description |
|----|----|----|----|
| `name` | string | `gson` | Name of the support. Default value is `gson`. |
| `properties` | Map\<string, boolean\> |  | Gson configuration properties. Properties are being ignored if specific Gson is set. Only `boolean` configuration values are supported. |

Optional configuration options
