Type:
[io.helidon.integrations.oci.SessionTokenMethodConfig](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.oci/io/helidon/integrations/oci/SessionTokenMethodConfig.html)

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
<td><p><code>initial-refresh-delay</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Delay of the first refresh. Defaults to
0, to refresh immediately (implemented in the authentication details
provider).</p>
<p>See
com.oracle.bmc.auth.SessionTokenAuthenticationDetailsProvider.SessionTokenAuthenticationDetailsProviderBuilder.initialRefreshDelay(long)</p></td>
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
<td><p><code>private-key-path</code></p></td>
<td><p>Path</p></td>
<td></td>
<td><p>The OCI authentication private key
resource. A resource can be defined as a resource on classpath, file on
the file system, base64 encoded text value in config, or plain-text
value in config.</p>
<p>If not defined, we will use
<code>".oci/sessions/DEFAULT/oci_api_key.pem</code> file in user home
directory.</p></td>
</tr>
<tr>
<td><p><code>refresh-period</code></p></td>
<td><p>Duration</p></td>
<td></td>
<td><p>Refresh period, i.e. how often refresh
occurs. Defaults to 55 minutes (implemented in the authentication
details provider).</p>
<p>See
com.oracle.bmc.auth.SessionTokenAuthenticationDetailsProvider.SessionTokenAuthenticationDetailsProviderBuilder.refreshPeriod(long)</p></td>
</tr>
<tr>
<td><p><code>region</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The OCI region.</p></td>
</tr>
<tr>
<td><p><code>session-lifetime-hours</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Maximal lifetime of a session. Defaults
to (and maximum is) 24 hours. Can only be set to a lower value.</p></td>
</tr>
<tr>
<td><p><code>session-token</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Session token value. If both this
value, and sessionTokenPath() is defined, this value is used.</p></td>
</tr>
<tr>
<td><p><code>session-token-path</code></p></td>
<td><p>Path</p></td>
<td></td>
<td><p>Session token path. If both this value,
and sessionToken() is defined, the value of sessionToken() is
used.</p></td>
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
