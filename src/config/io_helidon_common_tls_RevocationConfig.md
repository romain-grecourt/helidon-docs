Type: [io.helidon.common.tls.RevocationConfig](https://helidon.io/docs/v4/apidocs/io.helidon.common.tls/io/helidon/common/tls/RevocationConfig.html)

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
<td><p><code>check-only-end-entity</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Only check the revocation status of
end-entity certificates. Default value is <code>false</code>.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Flag indicating whether this revocation
config is enabled.</p></td>
</tr>
<tr>
<td><p><code>fallback-enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Enable fallback to the less preferred
checking option.</p>
<p>If the primary method for revocation checking fails to verify the
revocation status of a certificate (such as using a CRL or OCSP), the
checker will attempt alternative methods. This option ensures whether
revocation checking is performed strictly according to the specified
method, or should fall back to the one less preferred. OCSP is preferred
over the CRL by default.</p></td>
</tr>
<tr>
<td><p><code>ocsp-responder-uri</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>The URI that identifies the location of
the OCSP responder. This overrides the <code>ocsp.responderURL</code>
security property and any responder specified in a certificate’s
Authority Information Access Extension, as defined in RFC 5280.</p></td>
</tr>
<tr>
<td><p><code>prefer-crl-over-ocsp</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Prefer CRL over OCSP. Default value is
<code>false</code>. OCSP is preferred over the CRL by default.</p></td>
</tr>
<tr>
<td><p><code>soft-fail-enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Allow revocation check to succeed if
the revocation status cannot be determined for one of the following
reasons:</p>
<ul>
<li><p>The CRL or OCSP response cannot be obtained because of a network
error.</p></li>
<li><p>The OCSP responder returns one of the following errors specified
in section 2.3 of RFC 2560: internalError or tryLater.</p></li>
</ul></td>
</tr>
</tbody>
</table>
