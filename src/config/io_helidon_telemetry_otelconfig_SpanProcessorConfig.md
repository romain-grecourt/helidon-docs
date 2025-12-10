Type:
[io.helidon.telemetry.otelconfig.SpanProcessorConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/SpanProcessorConfig.html)

# Configuration options

<table>
<caption>Required configuration options</caption>
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
<td><p><code>type</code></p></td>
<td><p>SpanProcessorType (SIMPLE,
BATCH)</p></td>
<td></td>
<td><p>Span processor type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>SIMPLE</code>: Simple Span Processor.</p></li>
<li><p><code>BATCH</code>: Batch Span Processor.</p></li>
</ul></td>
</tr>
</tbody>
</table>

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
<td><p><code>exporters</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Name(s) of the span exporter(s) this
span processor should use; specifying no names uses all configured
exporters (or if no exporters are configured, the default OpenTelemetry
exporter(s)).</p>
<p>Each name must be the name of one of the configured
OpenTelemetryTracingConfig.exporterConfigs().</p></td>
</tr>
</tbody>
</table>
