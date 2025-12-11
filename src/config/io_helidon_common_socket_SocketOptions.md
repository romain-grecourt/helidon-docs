Type:
[io.helidon.common.socket.SocketOptions](https://helidon.io/docs/v4/apidocs/io.helidon.common.socket/io/helidon/common/socket/SocketOptions.html)

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
<td><p><code>PT10S</code></p></td>
<td><p>Socket connect timeout. Default is 10
seconds.</p></td>
</tr>
<tr>
<td><p><code>read-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT30S</code></p></td>
<td><p>Socket read timeout. Default is 30
seconds.</p></td>
</tr>
<tr>
<td><p><code>socket-keep-alive</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Configure socket keep alive. Default is
<code>true</code>.</p>
<p>See java.net.StandardSocketOptions.SO_KEEPALIVE</p></td>
</tr>
<tr>
<td><p><code>socket-receive-buffer-size</code></p></td>
<td><p>int</p></td>
<td></td>
<td><p>Socket receive buffer size.</p>
<p>See java.net.StandardSocketOptions.SO_RCVBUF</p></td>
</tr>
<tr>
<td><p><code>socket-reuse-address</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Socket reuse address. Default is
<code>true</code>.</p>
<p>See java.net.StandardSocketOptions.SO_REUSEADDR</p></td>
</tr>
<tr>
<td><p><code>socket-send-buffer-size</code></p></td>
<td><p>int</p></td>
<td></td>
<td><p>Socket send buffer size.</p>
<p>See java.net.StandardSocketOptions.SO_SNDBUF</p></td>
</tr>
<tr>
<td><p><code>tcp-no-delay</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>This option may improve performance on
some systems. Default is <code>false</code>.</p>
<p>See java.net.StandardSocketOptions.TCP_NODELAY</p></td>
</tr>
</tbody>
</table>
