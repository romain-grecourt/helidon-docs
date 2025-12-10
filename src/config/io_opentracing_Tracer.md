Zipkin tracer configuration

Type: io.opentracing.Tracer

This is a standalone configuration type, prefix from configuration root:
`tracing`

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
<td><p><code>api-version</code></p></td>
<td><p>Version (V1, V2)</p></td>
<td><p><code>V2</code></p></td>
<td><p>Version of Zipkin API to use. Defaults
to Version.V2.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>V1</code>: Version 1.</p></li>
<li><p><code>V2</code>: Version 2.</p></li>
</ul></td>
</tr>
</tbody>
</table>
