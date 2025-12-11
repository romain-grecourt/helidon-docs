Type:
[io.helidon.security.providers.httpsign.InboundClientDefinition](https://helidon.io/docs/v4/apidocs/io.helidon.security.providers.httpsign/io/helidon/security/providers/httpsign/InboundClientDefinition.html)

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
<td><p><code>algorithm</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Algorithm of signature used by this
client. Currently supported:</p>
<ul>
<li><p>rsa-sha256 - asymmetric based on public/private keys</p></li>
<li><p>hmac-sha256 - symmetric based on a shared secret</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>hmac.secret</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Helper method to configure a
password-like secret (instead of byte based hmacSecret(byte[]). The
password is transformed to bytes with StandardCharsets.UTF_8
charset.</p></td>
</tr>
<tr>
<td><p><code>key-id</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The key id of this client to map to
this signature validation configuration.</p></td>
</tr>
<tr>
<td><p><code>principal-name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The principal name of the client,
defaults to keyId if not configured.</p></td>
</tr>
<tr>
<td><p><code>principal-type</code></p></td>
<td><p>SubjectType (USER, SERVICE)</p></td>
<td><p><code>SERVICE</code></p></td>
<td><p>The type of principal we have
authenticated (either user or service, defaults to service).</p></td>
</tr>
<tr>
<td><p><code>public-key</code></p></td>
<td><p><a href="../config/io_helidon_common_pki_Keys.md">Keys</a></p></td>
<td></td>
<td><p>For algorithms based on public/private
key (such as rsa-sha256), this provides access to the public key of the
client.</p></td>
</tr>
</tbody>
</table>
