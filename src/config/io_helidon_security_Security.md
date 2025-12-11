Configuration of security providers, integration and other security
options

Type:
[io.helidon.security.Security](https://helidon.io/docs/v4/apidocs/io.helidon.security/io/helidon/security/Security.html)

This is a standalone configuration type, prefix from configuration root:
`security`

# Configuration options

<table>
<caption>Required configuration options</caption>
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
<td><p><code>providers</code></p></td>
<td><p>io.helidon.security.spi.SecurityProvider[]
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProvider.md">idcs-role-mapper
(IdcsRoleMapperProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_config_vault_ConfigVaultProvider.md">config-vault
(ConfigVaultProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_jwt_JwtProvider.md">jwt
(JwtProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_httpauth_HttpBasicAuthProvider.md">http-basic-auth
(HttpBasicAuthProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperProvider.md">idcs-role-mapper
(IdcsMtRoleMapperProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_google_login_GoogleTokenProvider.md">google-login
(GoogleTokenProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_oidc_OidcProvider.md">oidc
(OidcProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_httpauth_HttpDigestAuthProvider.md">http-digest-auth
(HttpDigestAuthProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_header_HeaderAtnProvider.md">header-atn
(HeaderAtnProvider)</a></p></li>
<li><p><a href="../config/io_helidon_security_providers_abac_AbacProvider.md">abac
(AbacProvider)</a></p></li>
</ul></td>
<td></td>
<td><p>Add a provider, works as
addProvider(io.helidon.security.spi.SecurityProvider, String), where the
name is set to <code>Class#getSimpleName()</code>.</p></td>
</tr>
</tbody>
</table>

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
<td><p><code>default-authentication-provider</code></p></td>
<td><p>string (service provider
interface)</p></td>
<td></td>
<td><p>ID of the default authentication
provider</p></td>
</tr>
<tr>
<td><p><code>default-authorization-provider</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>ID of the default authorization
provider</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Security can be disabled using
configuration, or explicitly. By default, security instance is enabled.
Disabled security instance will not perform any checks and allow all
requests.</p></td>
</tr>
<tr>
<td><p><code>environment.server-time</code></p></td>
<td><p><a href="../config/io_helidon_security_SecurityTime.md">SecurityTime</a></p></td>
<td></td>
<td><p>Server time to use when evaluating
security policies that depend on time.</p></td>
</tr>
<tr>
<td><p><code>provider-policy.class-name</code></p></td>
<td><p>Class</p></td>
<td></td>
<td><p>Provider selection policy class name,
only used when type is set to CLASS</p></td>
</tr>
<tr>
<td><p><code>provider-policy.type</code></p></td>
<td><p>ProviderSelectionPolicyType (FIRST,
COMPOSITE, CLASS)</p></td>
<td><p><code>FIRST</code></p></td>
<td><p>Type of the policy.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>FIRST</code>: Choose first provider from the list by
default. Choose provider with the name defined when explicit provider
requested.</p></li>
<li><p><code>COMPOSITE</code>: Can compose multiple providers together
to form a single logical provider.</p></li>
<li><p><code>CLASS</code>: Explicit class for a custom
ProviderSelectionPolicyType.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>secrets</code></p></td>
<td><p>Map&lt;string, string&gt; (documented
for specific cases)</p></td>
<td></td>
<td><p>Configured secrets</p></td>
</tr>
<tr>
<td><p><code>secrets.*.config</code></p></td>
<td><p>io.helidon.security.SecretsProviderConfig
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_security_providers_config_vault_ConfigVaultProvider_SecretConfig.md">SecretConfig</a></p></li>
</ul></td>
<td></td>
<td><p>Configuration specific to the secret
provider</p></td>
</tr>
<tr>
<td><p><code>secrets.*.name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Name of the secret, used for
lookup</p></td>
</tr>
<tr>
<td><p><code>secrets.*.provider</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Name of the secret provider</p></td>
</tr>
<tr>
<td><p><code>tracing.enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether or not tracing should be
enabled. If set to false, security tracer will be a no-op
tracer.</p></td>
</tr>
</tbody>
</table>
