Type:
[io.helidon.telemetry.otelconfig.ZipkinExporterConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/ZipkinExporterConfig.html)

# Configuration options

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
<td><p><code>compression</code></p></td>
<td><p>CompressionType (GZIP, NONE)</p></td>
<td></td>
<td><p>Compression type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>GZIP</code>: GZIP compression.</p></li>
<li><p><code>NONE</code>: No compression.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>encoder</code></p></td>
<td><p>SpanBytesEncoder (JSON_V1, THRIFT,
JSON_V2, PROTO3)</p></td>
<td></td>
<td><p>Encoder type.</p></td>
</tr>
<tr>
<td><p><code>endpoint</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>Collector endpoint to which this
exporter should transmit.</p></td>
</tr>
<tr>
<td><p><code>timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Exporter timeout.</p></td>
</tr>
</tbody>
</table>
