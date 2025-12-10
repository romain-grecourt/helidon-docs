Type:
[io.helidon.common.configurable.Resource](https://helidon.io/docs/v4/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/Resource.html)

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
<td><p><code>content</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Binary content of the resource (base64
encoded).</p></td>
</tr>
<tr>
<td><p><code>content-plain</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Plain content of the resource
(text).</p></td>
</tr>
<tr>
<td><p><code>description</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Description of this resource when
configured through plain text or binary.</p></td>
</tr>
<tr>
<td><p><code>path</code></p></td>
<td><p>Path</p></td>
<td></td>
<td><p>Resource is located on
filesystem.</p></td>
</tr>
<tr>
<td><p><code>proxy-host</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Host of the proxy when using
URI.</p></td>
</tr>
<tr>
<td><p><code>proxy-port</code></p></td>
<td><p>int</p></td>
<td><p><code>80</code></p></td>
<td><p>Port of the proxy when using
URI.</p></td>
</tr>
<tr>
<td><p><code>resource-path</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Resource is located on
classpath.</p></td>
</tr>
<tr>
<td><p><code>uri</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>Resource is available on a
java.net.URI.</p>
<p>See proxy() See useProxy()</p></td>
</tr>
<tr>
<td><p><code>use-proxy</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to use proxy. If set to
<code>false</code>, proxy will not be used even if configured. When set
to <code>true</code> (default), proxy will be used if
configured.</p></td>
</tr>
</tbody>
</table>
