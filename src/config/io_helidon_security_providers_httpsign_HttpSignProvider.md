HTTP header signature provider.

Type:
[io.helidon.security.providers.httpsign.HttpSignProvider](https://helidon.io/docs/v4/apidocs/io.helidon.security.providers.httpsign/io/helidon/security/providers/httpsign/HttpSignProvider.html)

Config key:
```text
http-signatures
```

This type provides the following service implementations:

- `io.helidon.security.spi.AuthenticationProvider`

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
<td><p><code>backward-compatible-eol</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Enable support for Helidon versions
before 3.0.0 (exclusive).</p>
<p>Until version 3.0.0 (exclusive) there was a trailing end of line
added to the signed data. To be able to communicate cross versions, we
must configure this when talking to older versions of Helidon. Default
value is <code>false</code>. In Helidon 2.x, this switch exists as well
and the default is <code>true</code>, to allow communication between
versions as needed.</p></td>
</tr>
<tr>
<td><p><code>headers</code></p></td>
<td><p>HttpSignHeader[] (SIGNATURE,
AUTHORIZATION, CUSTOM)</p></td>
<td></td>
<td><p>Add a header that is validated on
inbound requests. Provider may support more than one header to
validate.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>SIGNATURE</code>: Creates (or validates) a "Signature"
header.</p></li>
<li><p><code>AUTHORIZATION</code>: Creates (or validates) an
"Authorization" header, that contains "Signature" as the beginning of
its content (the rest of the header is the same as for
SIGNATURE.</p></li>
<li><p><code>CUSTOM</code>: Custom provided using a
io.helidon.security.util.TokenHandler.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>inbound.keys</code></p></td>
<td><p><a href="../config/io_helidon_security_providers_httpsign_InboundClientDefinition.md">InboundClientDefinition[]</a></p></td>
<td></td>
<td><p>Add inbound configuration. This is used
to validate signature and authenticate the party.</p>
<p>The same can be done through configuration:</p>
<pre><code>{
 name = &quot;http-signatures&quot;
 class = &quot;HttpSignProvider&quot;
 http-signatures {
     inbound {
         # This configures the InboundClientDefinition
         keys: [
         {
             key-id = &quot;service1&quot;
             hmac.secret = &quot;${CLEAR=password}&quot;
         }]
     }
 }
}</code></pre></td>
</tr>
<tr>
<td><p><code>optional</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Set whether the signature is optional.
If set to true (default), this provider will
SecurityResponse.SecurityStatus.ABSTAIN from this request if signature
is not present. If set to false, this provider will
SecurityResponse.SecurityStatus.FAILURE fail if signature is not
present.</p></td>
</tr>
<tr>
<td><p><code>outbound</code></p></td>
<td><p><a href="../config/io_helidon_security_providers_common_OutboundConfig.md">OutboundConfig</a></p></td>
<td></td>
<td><p>Add outbound targets to this builder.
The targets are used to chose what to do for outbound communication. The
targets should have OutboundTargetDefinition attached through
OutboundTarget.Builder.customObject(Class, Object) to tell us how to
sign the request.</p>
<p>The same can be done through configuration:</p>
<pre><code>{
 name = &quot;http-signatures&quot;
 class = &quot;HttpSignProvider&quot;
 http-signatures {
     targets: [
     {
         name = &quot;service2&quot;
         hosts = [&quot;localhost&quot;]
         paths = [&quot;/service2/.*&quot;]
&#10;         # This configures the OutboundTargetDefinition
         signature {
             key-id = &quot;service1&quot;
             hmac.secret = &quot;${CLEAR=password}&quot;
         }
     }]
 }
}</code></pre></td>
</tr>
<tr>
<td><p><code>realm</code></p></td>
<td><p>string</p></td>
<td><p><code>helidon</code></p></td>
<td><p>Realm to use for challenging inbound
requests that do not have "Authorization" header in case header is
HttpSignHeader.AUTHORIZATION and singatures are not optional.</p></td>
</tr>
<tr>
<td><p><code>sign-headers</code></p></td>
<td><p><a href="../config/io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig.md">HeadersConfig[]</a></p></td>
<td></td>
<td><p>Override the default inbound required
headers (e.g. headers that MUST be signed and headers that MUST be
signed IF present).</p>
<p>Defaults:</p>
<ul>
<li><p>get, head, delete methods: date, (request-target), host are
mandatory; authorization if present (unless we are creating/validating
the HttpSignHeader.AUTHORIZATION ourselves</p></li>
<li><p>put, post: same as above, with addition of: content-length,
content-type and digest if present</p></li>
<li><p>for other methods: date, (request-target)</p></li>
</ul>
<p>Note that this provider DOES NOT validate the "Digest" HTTP header,
only the signature.</p></td>
</tr>
</tbody>
</table>
