Type:
[io.helidon.webclient.grpc.GrpcClientProtocolConfig](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.grpc/io/helidon/webclient/grpc/GrpcClientProtocolConfig.html)

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
<td><p><code>abort-poll-time-expired</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether to continue retrying after a
poll wait timeout expired or not. If a read operation timeouts out and
this flag is set to <code>false</code>, the event is logged and the
client will retry. Otherwise, an exception is thrown.</p></td>
</tr>
<tr>
<td><p><code>heartbeat-period</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT0S</code></p></td>
<td><p>How often to send a heartbeat (HTTP/2
ping) to check if the connection is still alive. This is useful for
long-running, streaming gRPC calls. It is turned off by default but can
be enabled by setting the period to a value greater than 0.</p></td>
</tr>
<tr>
<td><p><code>init-buffer-size</code></p></td>
<td><p>int</p></td>
<td><p><code>2048</code></p></td>
<td><p>Initial buffer size used to serialize
gRPC request payloads. Buffers shall grow according to the payload size,
but setting this initial buffer size to a larger value may improve
performance for certain applications.</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td><p><code>grpc</code></p></td>
<td><p>Name identifying this client protocol.
Defaults to type.</p></td>
</tr>
<tr>
<td><p><code>next-request-wait-time</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT1S</code></p></td>
<td><p>When data has been received from the
server but not yet requested by the client (i.e., listener), the
implementation will wait for this duration before signaling an error. If
data is requested and more data is still in the queue, this time wait
restarts until the next request is received. If duration expires, a
status of io.grpc.Status.CANCELLED is reported in the call to
io.grpc.ClientCall.Listener.onClose(io.grpc.Status,
io.grpc.Metadata).</p>
<p>See io.grpc.ClientCall.Listener.request(int)</p></td>
</tr>
<tr>
<td><p><code>poll-wait-time</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT10S</code></p></td>
<td><p>How long to wait for the next HTTP/2
data frame to arrive in underlying stream. Whether this is a fatal error
or not is controlled by abortPollTimeExpired().</p>
<p>See io.helidon.common.socket.SocketOptions.readTimeout()</p></td>
</tr>
</tbody>
</table>
