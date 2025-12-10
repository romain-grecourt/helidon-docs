Type:
[io.helidon.webserver.ConnectionConfig](https://helidon.io/docs/v4/apidocs/io.helidon.webserver/io/helidon/webserver/ConnectionConfig.html)

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
<td><p><code>connect-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT10S</code></p></td>
<td><p>Connect timeout. Default is
DEFAULT_CONNECT_TIMEOUT_DURATION.</p></td>
</tr>
<tr>
<td><p><code>keep-alive</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Configure socket keep alive. Default is
<code>true</code>.</p>
<p>See java.net.StandardSocketOptions.SO_KEEPALIVE</p></td>
</tr>
<tr>
<td><p><code>read-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT30S</code></p></td>
<td><p>Read timeout. Default is
DEFAULT_READ_TIMEOUT_DURATION</p></td>
</tr>
<tr>
<td><p><code>receive-buffer-size</code></p></td>
<td><p>int</p></td>
<td><p><code>32768</code></p></td>
<td><p>Socket receive buffer size. Default is
DEFAULT_SO_BUFFER_SIZE.</p>
<p>See java.net.StandardSocketOptions.SO_RCVBUF</p></td>
</tr>
<tr>
<td><p><code>reuse-address</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Socket reuse address. Default is
<code>true</code>.</p>
<p>See java.net.StandardSocketOptions.SO_REUSEADDR</p></td>
</tr>
<tr>
<td><p><code>send-buffer-size</code></p></td>
<td><p>int</p></td>
<td><p><code>32768</code></p></td>
<td><p>Socket send buffer size. Default is
DEFAULT_SO_BUFFER_SIZE.</p>
<p>See java.net.StandardSocketOptions.SO_SNDBUF</p></td>
</tr>
<tr>
<td><p><code>tcp-no-delay</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Disable <a href="https://en.wikipedia.org/wiki/Nagle%27s_algorithm">Nagle’s
algorithm</a> by setting TCP_NODELAY to true. This can result in better
performance on Mac or newer linux kernels for some payload types.
Default is <code>false</code>.</p>
<p>See java.net.StandardSocketOptions.TCP_NODELAY</p></td>
</tr>
</tbody>
</table>
