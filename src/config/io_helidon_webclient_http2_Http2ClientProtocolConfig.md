Type:
[io.helidon.webclient.http2.Http2ClientProtocolConfig](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.http2/io/helidon/webclient/http2/Http2ClientProtocolConfig.html)

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
<td><p><code>flow-control-block-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT15S</code></p></td>
<td><p>Timeout for blocking while waiting for
window update when window is depleted.</p></td>
</tr>
<tr>
<td><p><code>initial-window-size</code></p></td>
<td><p>int</p></td>
<td><p><code>65535</code></p></td>
<td><p>Configure INITIAL_WINDOW_SIZE setting
for new HTTP/2 connections. Sends to the server the size of the largest
frame payload client is willing to receive. Defaults to
io.helidon.http.http2.WindowSize.DEFAULT_WIN_SIZE.</p></td>
</tr>
<tr>
<td><p><code>max-frame-size</code></p></td>
<td><p>int</p></td>
<td><p><code>16384</code></p></td>
<td><p>Configure initial MAX_FRAME_SIZE
setting for new HTTP/2 connections. Maximum size of data frames in bytes
the client is prepared to accept from the server. Default value is
2^14(16_384).</p></td>
</tr>
<tr>
<td><p><code>max-header-list-size</code></p></td>
<td><p>long</p></td>
<td><p><code>-1</code></p></td>
<td><p>Configure initial MAX_HEADER_LIST_SIZE
setting for new HTTP/2 connections. Sends to the server the maximum
header field section size client is prepared to accept. Defaults to
<code>-1</code>, which means "unconfigured".</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td><p><code>h2</code></p></td>
<td></td>
</tr>
<tr>
<td><p><code>ping</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Check healthiness of cached connections
with HTTP/2.0 ping frame. Defaults to <code>false</code>.</p></td>
</tr>
<tr>
<td><p><code>ping-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT0.5S</code></p></td>
<td><p>Timeout for ping probe used for
checking healthiness of cached connections. Defaults to
<code>PT0.5S</code>, which means 500 milliseconds.</p></td>
</tr>
<tr>
<td><p><code>prior-knowledge</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Prior knowledge of HTTP/2 capabilities
of the server. If server we are connecting to does not support HTTP/2
and prior knowledge is set to <code>false</code>, only features
supported by HTTP/1 will be available and attempts to use HTTP/2
specific will throw an UnsupportedOperationException.</p>
<p><u>Plain text connection</u></p>
<p>If prior knowledge is set to <code>true</code>, we will not attempt
an upgrade of connection and use prior knowledge. If prior knowledge is
set to <code>false</code>, we will initiate an HTTP/1 connection and
upgrade it to HTTP/2, if supported by the server. plaintext connection
(<code>h2c</code>).</p>
<p><u>TLS protected connection</u></p>
<p>If prior knowledge is set to <code>true</code>, we will negotiate
protocol using HTTP/2 only, failing if not supported. if prior knowledge
is set to <code>false</code>, we will negotiate protocol using both
HTTP/2 and HTTP/1, using the protocol supported by server.</p></td>
</tr>
</tbody>
</table>
