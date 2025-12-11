Type:
[io.helidon.integrations.neo4j.Neo4j](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.neo4j/io/helidon/integrations/neo4j/Neo4j.html)

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
<td><p><code>authentication-enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Enable authentication.</p></td>
</tr>
<tr>
<td><p><code>certificate</code></p></td>
<td><p>Path</p></td>
<td></td>
<td><p>Set certificate path.</p></td>
</tr>
<tr>
<td><p><code>connection-acquisition-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT1M</code></p></td>
<td><p>Set connection acquisition
timeout.</p></td>
</tr>
<tr>
<td><p><code>encrypted</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Enable encrypted field.</p></td>
</tr>
<tr>
<td><p><code>hostname-verification-enabled</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Enable hostname verification.</p></td>
</tr>
<tr>
<td><p><code>idle-time-before-connection-test</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT1MS</code></p></td>
<td><p>Set idle time.</p></td>
</tr>
<tr>
<td><p><code>log-leaked-sessions</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Enable log leaked sessions.</p></td>
</tr>
<tr>
<td><p><code>max-connection-lifetime</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT5H</code></p></td>
<td><p>Set max life time.</p></td>
</tr>
<tr>
<td><p><code>max-connection-pool-size</code></p></td>
<td><p>int</p></td>
<td><p><code>100</code></p></td>
<td><p>Set pool size.</p></td>
</tr>
<tr>
<td><p><code>metrics-enabled</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Enable metrics.</p></td>
</tr>
<tr>
<td><p><code>password</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Create password.</p></td>
</tr>
<tr>
<td><p><code>trust-strategy</code></p></td>
<td><p>TrustStrategy (TRUST_ALL_CERTIFICATES,
TRUST_CUSTOM_CA_SIGNED_CERTIFICATES,
TRUST_SYSTEM_CA_SIGNED_CERTIFICATES)</p></td>
<td></td>
<td><p>Set trust strategy.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>TRUST_ALL_CERTIFICATES</code>: Trust all.</p></li>
<li><p><code>TRUST_CUSTOM_CA_SIGNED_CERTIFICATES</code>: Trust custom
certificates.</p></li>
<li><p><code>TRUST_SYSTEM_CA_SIGNED_CERTIFICATES</code>: Trust system
CA.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>uri</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Create uri.</p></td>
</tr>
<tr>
<td><p><code>username</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Create username.</p></td>
</tr>
</tbody>
</table>
