Type:
[io.helidon.webclient.api.WebClient](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/WebClient.html)

This is a standalone configuration type, prefix from configuration root:
`clients`

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
<td><p><code>base-uri</code></p></td>
<td><p>ClientUri</p></td>
<td></td>
<td><p>Base uri used by the client in all
requests.</p></td>
</tr>
<tr>
<td><p><code>connect-timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Connect timeout.</p>
<p>See io.helidon.common.socket.SocketOptions.connectTimeout()</p></td>
</tr>
<tr>
<td><p><code>connection-cache-size</code></p></td>
<td><p>int</p></td>
<td><p><code>256</code></p></td>
<td><p>Maximal size of the connection cache.
For most HTTP protocols, we may cache connections to various endpoints
for keep alive (or stream reuse in case of HTTP/2). This option limits
the size. Setting this number lower than the "usual" number of target
services will cause connections to be closed and reopened
frequently.</p></td>
</tr>
<tr>
<td><p><code>content-encoding</code></p></td>
<td><p><a href="../config/io_helidon_http_encoding_ContentEncodingContext.md">ContentEncodingContext</a></p></td>
<td></td>
<td><p>Configure the listener specific
io.helidon.http.encoding.ContentEncodingContext. This method discards
all previously registered ContentEncodingContext. If no content encoding
context is registered, default encoding context is used.</p></td>
</tr>
<tr>
<td><p><code>cookie-manager</code></p></td>
<td><p><a href="../config/io_helidon_webclient_api_WebClientCookieManager.md">WebClientCookieManager</a></p></td>
<td></td>
<td><p>WebClient cookie manager.</p></td>
</tr>
<tr>
<td><p><code>default-headers</code></p></td>
<td><p>Map&lt;string, string&gt;</p></td>
<td></td>
<td><p>Default headers to be used in every
request from configuration.</p></td>
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
<td><p><code>max-in-memory-entity</code></p></td>
<td><p>int</p></td>
<td><p><code>131072</code></p></td>
<td><p>If the entity is expected to be smaller
that this number of bytes, it would be buffered in memory to optimize
performance. If bigger, streaming will be used.</p>
<p>Note that for some entity types we cannot use streaming, as they are
already fully in memory (String, byte[]), for such cases, this option is
ignored. Default is 128Kb.</p></td>
</tr>
<tr>
<td><p><code>max-redirects</code></p></td>
<td><p>int</p></td>
<td><p><code>10</code></p></td>
<td><p>Max number of followed redirects. This
is ignored if followRedirects() option is <code>false</code>.</p></td>
</tr>
<tr>
<td><p><code>media-context</code></p></td>
<td><p><a href="../config/io_helidon_http_media_MediaContext.md">MediaContext</a></p></td>
<td><p><code>create()</code></p></td>
<td><p>Configure the listener specific
io.helidon.http.media.MediaContext. This method discards all previously
registered MediaContext. If no media context is registered, default
media context is used.</p></td>
</tr>
<tr>
<td><p><code>media-type-parser-mode</code></p></td>
<td><p>ParserMode (STRICT, RELAXED)</p></td>
<td><p><code>ParserMode.STRICT</code></p></td>
<td><p>Configure media type parsing mode for
HTTP <code>Content-Type</code> header.</p></td>
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
<td><p><code>protocol-configs</code></p></td>
<td><p>io.helidon.webclient.spi.ProtocolConfig[]
(service provider interface)</p></td>
<td></td>
<td><p>Configuration of client
protocols.</p></td>
</tr>
<tr>
<td><p><code>protocol-preference</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>List of HTTP protocol IDs by order of
preference. If left empty, all discovered providers will be used,
ordered by weight.</p>
<p>For example if both HTTP/2 and HTTP/1.1 providers are available
(considering HTTP/2 has higher weights), for ALPN we will send h2 and
http/1.1 and decide based on response. If TLS is not used, we would
attempt an upgrade (or use prior knowledge if configured in
protocolConfigs()).</p></td>
</tr>
<tr>
<td><p><code>proxy</code></p></td>
<td><p><a href="../config/io_helidon_webclient_api_Proxy.md">Proxy</a></p></td>
<td></td>
<td><p>Proxy configuration to be used for
requests.</p></td>
</tr>
<tr>
<td><p><code>read-continue-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT1S</code></p></td>
<td><p>Socket 100-Continue read timeout.
Default is 1 second. This read timeout is used when 100-Continue is sent
by the client, before it sends an entity.</p></td>
</tr>
<tr>
<td><p><code>read-timeout</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Read timeout.</p>
<p>See io.helidon.common.socket.SocketOptions.readTimeout()</p></td>
</tr>
<tr>
<td><p><code>relative-uris</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Can be set to <code>true</code> to
force the use of relative URIs in all requests, regardless of the
presence or absence of proxies or no-proxy lists.</p></td>
</tr>
<tr>
<td><p><code>send-expect-continue</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether Expect-100-Continue header is
sent to verify server availability before sending an entity.</p>
<p>Defaults to <code>true</code>.</p></td>
</tr>
<tr>
<td><p><code>services</code></p></td>
<td><p>io.helidon.webclient.spi.WebClientService[]
(service provider interface)</p></td>
<td></td>
<td><p>WebClient services.</p></td>
</tr>
<tr>
<td><p><code>share-connection-cache</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to share connection cache
between all the WebClient instances in JVM.</p></td>
</tr>
<tr>
<td><p><code>socket-options</code></p></td>
<td><p><a href="../config/io_helidon_common_socket_SocketOptions.md">SocketOptions</a></p></td>
<td></td>
<td><p>Socket options for connections opened
by this client. If there is a value explicitly configured on this type
and on the socket options, the one configured on this type’s builder
will win:</p>
<ul>
<li><p>readTimeout()</p></li>
<li><p>connectTimeout()</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>tls</code></p></td>
<td><p><a href="../config/io_helidon_common_tls_Tls.md">Tls</a></p></td>
<td></td>
<td><p>TLS configuration for any TLS request
from this client. TLS can also be configured per request. TLS is used
when the protocol is set to <code>https</code>.</p></td>
</tr>
<tr>
<td><p><code>write-buffer-size</code></p></td>
<td><p>int</p></td>
<td><p><code>4096</code></p></td>
<td><p>Buffer size used when writing data to
the underlying socket on a client TCP connection. A value that is less
or equal to 1 can be set to disable buffering at this level. Note that
if writing data to the socket in small chunks, they may not be delivered
to the network immediately due to Nagle’s algorithm (i.e., if
TCP_NO_DELAY is turned off).</p></td>
</tr>
</tbody>
</table>
