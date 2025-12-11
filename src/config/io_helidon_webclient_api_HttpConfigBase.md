Type:
[io.helidon.webclient.api.HttpConfigBase](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpConfigBase.html)

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
<td><p><code>connect-timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Connect timeout.</p>
<p>See io.helidon.common.socket.SocketOptions.connectTimeout()</p></td>
</tr>
<tr>
<td><p><code>follow-redirects</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to follow redirects.</p></td>
</tr>
<tr>
<td><p><code>keep-alive</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Determines if connection keep alive is
enabled (NOT socket keep alive, but HTTP connection keep alive, to
re-use the same connection for multiple requests).</p>
<p>See io.helidon.common.socket.SocketOptions.socketKeepAlive()</p></td>
</tr>
<tr>
<td><p><code>max-redirects</code></p></td>
<td><p>int</p></td>
<td><p><code>10</code></p></td>
<td><p>Max number of followed redirects. This
is ignored if followRedirects() option is <code>false</code>.</p></td>
</tr>
<tr>
<td><p><code>properties</code></p></td>
<td><p>Map&lt;string, string&gt;</p></td>
<td></td>
<td><p>Properties configured for this client.
These properties are propagated through client request, to be used by
services (and possibly for other purposes).</p></td>
</tr>
<tr>
<td><p><code>proxy</code></p></td>
<td><p><a href="../config/io_helidon_webclient_api_Proxy.md">Proxy</a></p></td>
<td></td>
<td><p>Proxy configuration to be used for
requests.</p></td>
</tr>
<tr>
<td><p><code>read-timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Read timeout.</p>
<p>See io.helidon.common.socket.SocketOptions.readTimeout()</p></td>
</tr>
<tr>
<td><p><code>tls</code></p></td>
<td><p><a href="../config/io_helidon_common_tls_Tls.md">Tls</a></p></td>
<td></td>
<td><p>TLS configuration for any TLS request
from this client. TLS can also be configured per request. TLS is used
when the protocol is set to <code>https</code>.</p></td>
</tr>
</tbody>
</table>
