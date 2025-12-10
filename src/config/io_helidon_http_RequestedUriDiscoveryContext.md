Type:
[io.helidon.http.RequestedUriDiscoveryContext](https://helidon.io/docs/v4/apidocs/io.helidon.http/io/helidon/http/RequestedUriDiscoveryContext.html)

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
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true if 'types' or 'trusted-proxies' is set; false otherwise</code></p></td>
<td><p>Sets whether requested URI discovery is
enabled for requestes arriving on the socket.</p></td>
</tr>
<tr>
<td><p><code>trusted-proxies</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_AllowList.md">AllowList</a></p></td>
<td></td>
<td><p>Sets the trusted proxies for requested
URI discovery for requests arriving on the socket.</p></td>
</tr>
<tr>
<td><p><code>types</code></p></td>
<td><p>RequestedUriDiscoveryType[] (FORWARDED,
X_FORWARDED, HOST)</p></td>
<td></td>
<td><p>Sets the discovery types for requested
URI discovery for requests arriving on the socket.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>FORWARDED</code>: The
<code>io.helidon.http.Header#FORWARDED</code> header is used to discover
the original requested URI.</p></li>
<li><p><code>X_FORWARDED</code>: The
<code>io.helidon.http.Header#X_FORWARDED_PROTO</code>,
<code>io.helidon.http.Header#X_FORWARDED_HOST</code>,
<code>io.helidon.http.Header#X_FORWARDED_PORT</code>,
<code>io.helidon.http.Header#X_FORWARDED_PREFIX</code> headers are used
to discover the original requested URI.</p></li>
<li><p><code>HOST</code>: This is the default, only the
<code>io.helidon.http.Header#HOST</code> header is used to discover
requested URI.</p></li>
</ul></td>
</tr>
</tbody>
</table>
