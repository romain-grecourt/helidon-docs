JWT authentication provider

Type:
[io.helidon.security.providers.jwt.JwtProvider](https://helidon.io/docs/v4/apidocs/io.helidon.security.providers.jwt/io/helidon/security/providers/jwt/JwtProvider.html)

Config key:
```text
jwt
```

This type provides the following service implementations:

- `io.helidon.security.spi.SecurityProvider`

- `io.helidon.security.spi.AuthenticationProvider`

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
<td><p><code>allow-impersonation</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether to allow impersonation by
explicitly overriding username from outbound requests using
io.helidon.security.EndpointConfig.PROPERTY_OUTBOUND_ID property. By
default this is not allowed and identity can only be
propagated.</p></td>
</tr>
<tr>
<td><p><code>allow-unsigned</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Configure support for unsigned JWT. If
this is set to <code>true</code> any JWT that has algorithm set to
<code>none</code> and no <code>kid</code> defined will be accepted. Note
that this has serious security impact - if JWT can be sent from a third
party, this allows the third party to send ANY JWT and it would be
accpted as valid.</p></td>
</tr>
<tr>
<td><p><code>atn-token.handler</code></p></td>
<td><p><a href="../config/io_helidon_security_util_TokenHandler.md">TokenHandler</a></p></td>
<td></td>
<td><p>Token handler to extract username from
request.</p></td>
</tr>
<tr>
<td><p><code>atn-token.jwk.resource</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>JWK resource used to verify JWTs
created by other parties.</p></td>
</tr>
<tr>
<td><p><code>atn-token.jwt-audience</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Audience expected in inbound
JWTs.</p></td>
</tr>
<tr>
<td><p><code>atn-token.verify-signature</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Configure whether to verify signatures.
Signatures verification is enabled by default. You can configure the
provider not to verify signatures.</p>
<p><strong>Make sure your service is properly secured on network level
and only accessible from a secure endpoint that provides the JWTs when
signature verification is disabled. If signature verification is
disabled, this service will accept <em>ANY</em> JWT</strong></p></td>
</tr>
<tr>
<td><p><code>authenticate</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to authenticate
requests.</p></td>
</tr>
<tr>
<td><p><code>optional</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether authentication is required. By
default, request will fail if the username cannot be extracted. If set
to false, request will process and this provider will abstain.</p></td>
</tr>
<tr>
<td><p><code>principal-type</code></p></td>
<td><p>SubjectType (USER, SERVICE)</p></td>
<td><p><code>USER</code></p></td>
<td><p>Principal type this provider extracts
(and also propagates).</p></td>
</tr>
<tr>
<td><p><code>propagate</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to propagate identity.</p></td>
</tr>
<tr>
<td><p><code>sign-token</code></p></td>
<td><p><a href="../config/io_helidon_security_providers_common_OutboundConfig.md">OutboundConfig</a></p></td>
<td></td>
<td><p>Configuration of outbound
rules.</p></td>
</tr>
<tr>
<td><p><code>sign-token.jwk.resource</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>JWK resource used to sign JWTs created
by us.</p></td>
</tr>
<tr>
<td><p><code>sign-token.jwt-issuer</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Issuer used to create new
JWTs.</p></td>
</tr>
<tr>
<td><p><code>use-jwt-groups</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Claim <code>groups</code> from JWT will
be used to automatically add groups to current subject (may be used with
jakarta.annotation.security.RolesAllowed annotation).</p></td>
</tr>
</tbody>
</table>
