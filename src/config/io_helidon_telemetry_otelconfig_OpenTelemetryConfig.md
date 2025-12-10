Type:
[io.helidon.telemetry.otelconfig.HelidonOpenTelemetry](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/HelidonOpenTelemetry.html)

This is a standalone configuration type, prefix from configuration root:
`telemetry`

# Configuration options

| key | type | default value | description |
|----|----|----|----|
| `service` | string |  | Service name used in sending telemetry data to the collector. |

Required configuration options

<table>
<caption>Optional configuration options</caption>
<colgroup>
<col style="width: 23%" />
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr>
<th>key</th>
<th>type</th>
<th>default value</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether the OpenTelemetry support is
enabled.</p></td>
</tr>
<tr>
<td><p><code>global</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether the
io.opentelemetry.api.OpenTelemetry instance created from this
configuration should be made the global one.</p></td>
</tr>
<tr>
<td><p><code>propagators</code></p></td>
<td><p>TextMapPropagator[]</p></td>
<td><p><code>new java.util.ArrayList&lt;&gt;(io.helidon.telemetry.otelconfig.ContextPropagationType.DEFAULT_PROPAGATORS)</code></p></td>
<td><p>OpenTelemetry
io.opentelemetry.context.propagation.TextMapPropagator instances added
explicitly by the app.</p>
<p>Default: ContextPropagationType.DEFAULT_NAMES. See
io.helidon.telemetry.otelconfig.ContextPropagationType</p></td>
</tr>
<tr>
<td><p><code>signals.tracing</code></p></td>
<td><p><a href="../config/io_helidon_telemetry_otelconfig_OpenTelemetryTracingConfig.md">OpenTelemetryTracingConfig</a></p></td>
<td></td>
<td><p>OpenTelemetry tracing
settings.</p></td>
</tr>
</tbody>
</table>
