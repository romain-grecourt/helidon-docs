Type:
[io.helidon.webserver.observe.log.LogStreamConfig](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.observe.log/io/helidon/webserver/observe/log/LogStreamConfig.html)

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
<td><p><code>content-type</code></p></td>
<td><p>HttpMediaType</p></td>
<td><p><code>@io.helidon.http.HttpMediaTypes@.PLAINTEXT_UTF_8</code></p></td>
<td></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether stream is enabled.</p></td>
</tr>
<tr>
<td><p><code>idle-message-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT5S</code></p></td>
<td><p>How long to wait before we send the
idle message, to make sure we keep the stream alive.</p>
<p>See idleString()</p></td>
</tr>
<tr>
<td><p><code>idle-string</code></p></td>
<td><p>string</p></td>
<td><p>`% `</p></td>
<td><p>String sent when there are no log
messages within the idleMessageTimeout().</p></td>
</tr>
<tr>
<td><p><code>queue-size</code></p></td>
<td><p>int</p></td>
<td><p><code>100</code></p></td>
<td><p>Length of the in-memory queue that
buffers log messages from loggers before sending them over the network.
If the messages are produced faster than we can send them to client,
excess messages are DISCARDED, and will not be sent.</p></td>
</tr>
</tbody>
</table>
