Type:
[io.helidon.telemetry.otelconfig.SamplerConfig](https://helidon.io/docs/v4/apidocs/io.helidon.telemetry.otelconfig/io/helidon/telemetry/otelconfig/SamplerConfig.html)

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
<td><p><code>param</code></p></td>
<td><p>double</p></td>
<td></td>
<td><p>Sampler parameter.</p></td>
</tr>
<tr>
<td><p><code>type</code></p></td>
<td><p>SamplerType (ALWAYS_ON, ALWAYS_OFF,
TRACEIDRATIO, PARENTBASED_ALWAYS_ON, PARENTBASED_ALWAYS_OFF,
PARENTBASED_TRACEIDRATIO)</p></td>
<td><p><code>SamplerType.DEFAULT</code></p></td>
<td><p>Sampler type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>ALWAYS_ON</code>: Always on sampler.</p></li>
<li><p><code>ALWAYS_OFF</code>: Always off sampler.</p></li>
<li><p><code>TRACEIDRATIO</code>: Trace ID ratio-based sampler.</p></li>
<li><p><code>PARENTBASED_ALWAYS_ON</code>: Parent-based always-on
sampler.</p></li>
<li><p><code>PARENTBASED_ALWAYS_OFF</code>: Parent-based always-off
sampler.</p></li>
<li><p><code>PARENTBASED_TRACEIDRATIO</code>: Parent-based trace ID
ration-based sampler.</p></li>
</ul></td>
</tr>
</tbody>
</table>
