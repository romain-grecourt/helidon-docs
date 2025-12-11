Type:
[io.helidon.webserver.security.SecurityFeature](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.security/io/helidon/webserver/security/SecurityFeature.html)

Config key:
```text
security
```

This type provides the following service implementations:

- `io.helidon.webserver.spi.ServerFeatureProvider`

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
<td><p><code>defaults</code></p></td>
<td><p><a href="../config/io_helidon_webserver_security_SecurityHandler.md">SecurityHandler</a></p></td>
<td><p><code>SecurityHandler.create()</code></p></td>
<td><p>The default security handler.</p></td>
</tr>
<tr>
<td><p><code>paths</code></p></td>
<td><p><a href="../config/io_helidon_webserver_security_PathsConfig.md">PathsConfig[]</a></p></td>
<td></td>
<td><p>Configuration for webserver
paths.</p></td>
</tr>
<tr>
<td><p><code>security</code></p></td>
<td><p><a href="../config/io_helidon_security_Security.md">Security</a></p></td>
<td></td>
<td><p>Security associated with this feature.
If not specified here, the feature uses security registered with
io.helidon.common.context.Contexts.globalContext(), if not found, it
creates a new instance from root of configuration (using
<code>security</code> key).</p>
<p>This configuration allows usage of a different security instance for
a specific security feature setup.</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>800.0</code></p></td>
<td><p>Weight of the security feature. Value
is: io.helidon.webserver.security.SecurityFeature.WEIGHT.</p></td>
</tr>
</tbody>
</table>
