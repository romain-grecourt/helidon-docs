Type:
[io.helidon.telemetry.otelconfig.OpenTelemetryTracingConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/OpenTelemetryTracingConfig.html)

# Configuration options

<table>
<caption>Optional configuration options</caption>
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
<td><p><code>attributes.booleans</code></p></td>
<td><p>Map&lt;string, boolean&gt;</p></td>
<td></td>
<td><p>Boolean attributes.</p></td>
</tr>
<tr>
<td><p><code>attributes.doubles</code></p></td>
<td><p>Map&lt;string, double&gt;</p></td>
<td></td>
<td><p>Double attributes.</p></td>
</tr>
<tr>
<td><p><code>attributes.longs</code></p></td>
<td><p>Map&lt;string, long&gt;</p></td>
<td></td>
<td><p>Long attributes.</p></td>
</tr>
<tr>
<td><p><code>attributes.strings</code></p></td>
<td><p>Map&lt;string, string&gt;</p></td>
<td></td>
<td><p>String attributes.</p></td>
</tr>
<tr>
<td><p><code>exporters</code></p></td>
<td><p>Map&lt;string,
SpanExporter&gt;</p></td>
<td></td>
<td><p>Span exporters.</p>
<p>The key in the map is a unique name, of the user’s choice, for the
exporter config settings. The SpanProcessorConfig.exporters() config
setting for a processor config specifies zero or more of these names to
associate the exporters built from the exporter configs with the
processor built from the processor config.</p></td>
</tr>
<tr>
<td><p><code>processors</code></p></td>
<td><p><a href="../config/io_helidon_telemetry_otelconfig_SpanProcessorConfig.md">SpanProcessorConfig[]</a></p></td>
<td></td>
<td><p>Settings for span processors.</p></td>
</tr>
<tr>
<td><p><code>sampler</code></p></td>
<td><p>Sampler</p></td>
<td></td>
<td><p>Tracing sampler.</p></td>
</tr>
<tr>
<td><p><code>span-limits</code></p></td>
<td><p>SpanLimits</p></td>
<td></td>
<td><p>Tracing span limits.</p></td>
</tr>
</tbody>
</table>
