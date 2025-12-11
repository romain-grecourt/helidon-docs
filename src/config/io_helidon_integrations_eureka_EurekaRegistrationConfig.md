Type:
[io.helidon.integrations.eureka.EurekaRegistrationServerFeature](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.eureka/io/helidon/integrations/eureka/EurekaRegistrationServerFeature.html)

Config key:
```text
eureka
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
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether this feature will be
enabled.</p></td>
</tr>
<tr>
<td><p><code>instance</code></p></td>
<td><p><a href="../config/io_helidon_integrations_eureka_InstanceInfoConfig.md">InstanceInfoConfig</a></p></td>
<td><p><code>io.helidon.integrations.eureka.EurekaRegistrationConfigBlueprint.create()</code></p></td>
<td><p>An InstanceInfoConfig describing the
service instance to be registered.</p>
<p>See InstanceInfoConfig</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>100.0</code></p></td>
<td><p>The (zero or positive)
io.helidon.common.Weighted weight of this instance.</p></td>
</tr>
</tbody>
</table>
