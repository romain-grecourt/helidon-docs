Type:
[io.helidon.telemetry.otelconfig.SpanExporterConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/SpanExporterConfig.html)

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
<td><p><code>type</code></p></td>
<td><p>ExporterType (OTLP, ZIPKIN, CONSOLE,
LOGGING_OTLP)</p></td>
<td><p><code>ExporterType.DEFAULT</code></p></td>
<td><p>Span exporter type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>OTLP</code>: OpenTelemetry Protocol
io.opentelemetry.exporter.otlp.http.trace.OtlpHttpSpanExporter and
io.opentelemetry.exporter.otlp.trace.OtlpGrpcSpanExporter.</p></li>
<li><p><code>ZIPKIN</code>: Zipkin
io.opentelemetry.exporter.zipkin.ZipkinSpanExporter.</p></li>
<li><p><code>CONSOLE</code>: Console
(io.opentelemetry.exporter.logging.LoggingSpanExporter.</p></li>
<li><p><code>LOGGING_OTLP</code>: JSON logging to console
io.opentelemetry.exporter.logging.otlp.OtlpJsonLoggingSpanExporter.</p></li>
</ul></td>
</tr>
</tbody>
</table>
