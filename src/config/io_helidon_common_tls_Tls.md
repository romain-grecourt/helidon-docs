Type:
[io.helidon.common.tls.Tls](https://helidon.io/docs/v4/apidocs/io.helidon.common.tls/io/helidon/common/tls/Tls.html)

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
<td><p><code>cipher-suite</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Enabled cipher suites for TLS
communication.</p></td>
</tr>
<tr>
<td><p><code>client-auth</code></p></td>
<td><p>TlsClientAuth (REQUIRED, OPTIONAL,
NONE)</p></td>
<td><p><code>TlsClientAuth.NONE</code></p></td>
<td><p>Configure requirement for mutual
TLS.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>REQUIRED</code>: Mutual TLS is required. Server MUST
present a certificate trusted by the client, client MUST present a
certificate trusted by the server. This implies private key and trust
configuration for both server and client.</p></li>
<li><p><code>OPTIONAL</code>: Mutual TLS is optional. Server MUST
present a certificate trusted by the client, client MAY present a
certificate trusted by the server. This implies private key
configuration at least for server, trust configuration for at least
client.</p></li>
<li><p><code>NONE</code>: Mutual TLS is disabled. Server MUST present a
certificate trusted by the client, client does not present a
certificate. This implies private key configuration for server, trust
configuration for client.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Flag indicating whether Tls is
enabled.</p></td>
</tr>
<tr>
<td><p><code>endpoint-identification-algorithm</code></p></td>
<td><p>string</p></td>
<td><p><code>HTTPS</code></p></td>
<td><p>Identification algorithm for SSL
endpoints.</p></td>
</tr>
<tr>
<td><p><code>internal-keystore-provider</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Provider of the key stores used
internally to create a key and trust manager factories.</p></td>
</tr>
<tr>
<td><p><code>internal-keystore-type</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Type of the key stores used internally
to create a key and trust manager factories.</p></td>
</tr>
<tr>
<td><p><code>key-manager-factory-algorithm</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Algorithm of the key manager factory
used when private key is defined. Defaults to
javax.net.ssl.KeyManagerFactory.getDefaultAlgorithm().</p></td>
</tr>
<tr>
<td><p><code>manager</code></p></td>
<td><p>io.helidon.common.tls.TlsManager
(service provider interface)</p></td>
<td></td>
<td><p>The Tls manager. If one is not
explicitly defined in the config then a default manager will be
created.</p>
<p>See ConfiguredTlsManager</p></td>
</tr>
<tr>
<td><p><code>private-key</code></p></td>
<td><p>PrivateKey</p></td>
<td></td>
<td><p>Private key to use. For server side
TLS, this is required. For client side TLS, this is optional (used when
mutual TLS is enabled).</p></td>
</tr>
<tr>
<td><p><code>protocol</code></p></td>
<td><p>string</p></td>
<td><p><code>TLS</code></p></td>
<td><p>Configure the protocol used to obtain
an instance of javax.net.ssl.SSLContext.</p></td>
</tr>
<tr>
<td><p><code>protocols</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Enabled protocols for TLS
communication. Example of valid values for <code>TLS</code> protocol:
<code>TLSv1.3</code>, <code>TLSv1.2</code></p></td>
</tr>
<tr>
<td><p><code>provider</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Use explicit provider to obtain an
instance of javax.net.ssl.SSLContext.</p></td>
</tr>
<tr>
<td><p><code>revocation</code></p></td>
<td><p><a href="../config/io_helidon_common_tls_RevocationConfig.md">RevocationConfig</a></p></td>
<td></td>
<td><p>Certificate revocation check
configuration.</p></td>
</tr>
<tr>
<td><p><code>secure-random-algorithm</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Algorithm to use when creating a new
secure random.</p></td>
</tr>
<tr>
<td><p><code>secure-random-provider</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Provider to use when creating a new
secure random. When defined, secureRandomAlgorithm() must be defined as
well.</p></td>
</tr>
<tr>
<td><p><code>session-cache-size</code></p></td>
<td><p>int</p></td>
<td><p><code>20480</code></p></td>
<td><p>SSL session cache size.</p></td>
</tr>
<tr>
<td><p><code>session-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT24H</code></p></td>
<td><p>SSL session timeout.</p></td>
</tr>
<tr>
<td><p><code>trust</code></p></td>
<td><p>X509Certificate[]</p></td>
<td></td>
<td><p>List of certificates that form the
trust manager.</p></td>
</tr>
<tr>
<td><p><code>trust-all</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Trust any certificate provided by the
other side of communication.</p>
<p><strong>This is a dangerous setting:</strong> if set to
<code>true</code>, any certificate will be accepted, throwing away most
of the security advantages of TLS. <strong>NEVER</strong> do this in
production.</p></td>
</tr>
<tr>
<td><p><code>trust-manager-factory-algorithm</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Trust manager factory
algorithm.</p></td>
</tr>
</tbody>
</table>
