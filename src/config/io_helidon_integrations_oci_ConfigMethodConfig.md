Type:
[io.helidon.integrations.oci.ConfigMethodConfig](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.oci/io/helidon/integrations/oci/ConfigMethodConfig.html)

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
<td><p><code>fingerprint</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The OCI authentication fingerprint.</p>
<p>This configuration property must be provided in order to set the <a href="https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm">API
signing key’s fingerprint</a>. See
com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider.getFingerprint()
for more details.</p></td>
</tr>
<tr>
<td><p><code>passphrase</code></p></td>
<td><p>char[]</p></td>
<td></td>
<td><p>The OCI authentication passphrase.</p>
<p>This property must be provided in order to set the
com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider.getPassphraseCharacters().</p></td>
</tr>
<tr>
<td><p><code>private-key</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>The OCI authentication private key
resource. A resource can be defined as a resource on classpath, file on
the file system, base64 encoded text value in config, or plain-text
value in config.</p>
<p>If not defined, we will use <code>.oci/oic_api_key.pem</code> file in
user home directory.</p></td>
</tr>
<tr>
<td><p><code>region</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The OCI region.</p></td>
</tr>
<tr>
<td><p><code>tenant-id</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The OCI tenant id.</p>
<p>This property must be provided in order to set the
com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider.getTenantId().</p></td>
</tr>
<tr>
<td><p><code>user-id</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The OCI user id.</p>
<p>This property must be provided in order to set the
com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider.getUserId().</p></td>
</tr>
</tbody>
</table>
