Type:
[io.helidon.openapi.OpenApiFeature](https://helidon.io/docs/v4/apidocs/io.helidon.openapi/io/helidon/openapi/OpenApiFeature.html)

This is a standalone configuration type, prefix from configuration root:
`openapi`

This type provides the following service implementations:

- `io.helidon.webserver.spi.ServerFeatureProvider`

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
<td><p><code>cors</code></p></td>
<td><p><a href="../config/io_helidon_cors_CrossOriginConfig.md">CrossOriginConfig</a></p></td>
<td></td>
<td><p>CORS config.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Sets whether the feature should be
enabled.</p></td>
</tr>
<tr>
<td><p><code>manager</code></p></td>
<td><p>io.helidon.openapi.OpenApiManager
(service provider interface)</p></td>
<td></td>
<td><p>OpenAPI manager.</p></td>
</tr>
<tr>
<td><p><code>permit-all</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to allow anybody to access the
endpoint.</p>
<p>See roles()</p></td>
</tr>
<tr>
<td><p><code>roles</code></p></td>
<td><p>string[]</p></td>
<td><p><code>openapi</code></p></td>
<td><p>Hints for role names the user is
expected to be in.</p></td>
</tr>
<tr>
<td><p><code>services</code></p></td>
<td><p>io.helidon.openapi.OpenApiService[]
(service provider interface)</p></td>
<td></td>
<td><p>OpenAPI services.</p></td>
</tr>
<tr>
<td><p><code>sockets</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>List of sockets to register this
feature on. If empty, it would get registered on all sockets.</p></td>
</tr>
<tr>
<td><p><code>static-file</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Path of the static OpenAPI document
file. Default types are <code>json</code>, <code>yaml</code>, and
<code>yml</code>.</p></td>
</tr>
<tr>
<td><p><code>web-context</code></p></td>
<td><p>string</p></td>
<td><p><code>/openapi</code></p></td>
<td><p>Web context path for the OpenAPI
endpoint.</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>90.0</code></p></td>
<td><p>Weight of the OpenAPI feature. This is
quite low, to be registered after routing.
io.helidon.openapi.OpenApiFeature.WEIGHT.</p></td>
</tr>
</tbody>
</table>
