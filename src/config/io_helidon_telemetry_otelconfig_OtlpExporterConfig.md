Type:
[io.helidon.telemetry.otelconfig.OtlpExporterConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/OtlpExporterConfig.html)

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
<td><p><code>certificate</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>Trusted certificates.</p></td>
</tr>
<tr>
<td><p><code>client.certificate</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>TLS certificate.</p></td>
</tr>
<tr>
<td><p><code>client.key</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>TLS client key.</p></td>
</tr>
<tr>
<td><p><code>compression</code></p></td>
<td><p>CompressionType (GZIP, NONE)</p></td>
<td></td>
<td><p>Compression the exporter uses.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>GZIP</code>: GZIP compression.</p></li>
<li><p><code>NONE</code>: No compression.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>endpoint</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>Endpoint of the collector to which the
exporter should transmit.</p></td>
</tr>
<tr>
<td><p><code>headers</code></p></td>
<td><p>Map&lt;string, string&gt;</p></td>
<td></td>
<td><p>Headers added to each export
message.</p></td>
</tr>
<tr>
<td><p><code>protocol</code></p></td>
<td><p>OtlpExporterProtocolType (HTTP_PROTO,
GRPC)</p></td>
<td><p><code>OtlpExporterProtocolType.DEFAULT</code></p></td>
<td><p>Exporter protocol type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>HTTP_PROTO</code>: http/proto protocol type.</p></li>
<li><p><code>GRPC</code>: grpc protocol type.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>retry-policy</code></p></td>
<td><p>RetryPolicy</p></td>
<td></td>
<td><p>Retry policy.</p></td>
</tr>
<tr>
<td><p><code>timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Exporter timeout.</p></td>
</tr>
</tbody>
</table>
