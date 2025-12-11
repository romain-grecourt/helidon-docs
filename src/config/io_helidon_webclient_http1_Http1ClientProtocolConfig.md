Type:
[io.helidon.webclient.http1.Http1ClientProtocolConfig](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.http1/io/helidon/webclient/http1/Http1ClientProtocolConfig.html)

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
<td><p><code>default-keep-alive</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to use keep alive by
default.</p></td>
</tr>
<tr>
<td><p><code>max-header-size</code></p></td>
<td><p>int</p></td>
<td><p><code>16384</code></p></td>
<td><p>Configure the maximum allowed header
size of the response.</p></td>
</tr>
<tr>
<td><p><code>max-status-line-length</code></p></td>
<td><p>int</p></td>
<td><p><code>256</code></p></td>
<td><p>Configure the maximum allowed length of
the status line from the response.</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td><p><code>http_1_1</code></p></td>
<td></td>
</tr>
<tr>
<td><p><code>validate-request-headers</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Sets whether the request header format
is validated or not.</p>
<pre><code>Defaults to `false` as user has control on the header creation.</code></pre></td>
</tr>
<tr>
<td><p><code>validate-response-headers</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Sets whether the response header format
is validated or not.</p>
<pre><code>Defaults to `true`.</code></pre></td>
</tr>
</tbody>
</table>
