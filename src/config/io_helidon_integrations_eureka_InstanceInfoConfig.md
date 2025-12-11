Type:
[io.helidon.integrations.eureka.InstanceInfoConfig](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.eureka/io/helidon/integrations/eureka/InstanceInfoConfig.html)

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
<td><p><code>appGroup</code></p></td>
<td><p>string</p></td>
<td><p><code>unknown</code></p></td>
<td><p>The app group name.</p></td>
</tr>
<tr>
<td><p><code>asgName</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The ASG name.
&lt;abbr&gt;ASG&lt;/abbr&gt; stands for Auto Scaling Group.</p></td>
</tr>
<tr>
<td><p><code>healthCheckUrl</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>The health check URL.</p></td>
</tr>
<tr>
<td><p><code>healthCheckUrlPath</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The health check URL path (used if any
health check URL is not explicitly set).</p></td>
</tr>
<tr>
<td><p><code>homePageUrl</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>The home page URL.</p></td>
</tr>
<tr>
<td><p><code>homePageUrlPath</code></p></td>
<td><p>string</p></td>
<td><p><code>/</code></p></td>
<td><p>The home page URL path (used if the
homepage URL is not explicitly set).</p></td>
</tr>
<tr>
<td><p><code>hostName</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The hostname.</p></td>
</tr>
<tr>
<td><p><code>instanceId</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The instance id.</p></td>
</tr>
<tr>
<td><p><code>ipAddr</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The IP address.</p></td>
</tr>
<tr>
<td><p><code>lease</code></p></td>
<td><p><a href="../config/io_helidon_integrations_eureka_LeaseInfoConfig.md">LeaseInfoConfig</a></p></td>
<td><p><code>io.helidon.integrations.eureka.InstanceInfoConfigBlueprint.create()</code></p></td>
<td><p>The LeaseInfoConfig.</p>
<p>See LeaseInfoConfig</p></td>
</tr>
<tr>
<td><p><code>metadata</code></p></td>
<td><p>Map&lt;string, string&gt;</p></td>
<td><p><code>@java.util.Map@.of()</code></p></td>
<td><p>Metadata.</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td><p><code>unknown</code></p></td>
<td><p>The app name.</p></td>
</tr>
<tr>
<td><p><code>port</code></p></td>
<td><p><a href="../config/io_helidon_integrations_eureka_PortInfoConfig.md">PortInfoConfig</a></p></td>
<td><p><code>io.helidon.integrations.eureka.InstanceInfoConfigBlueprint.create()</code></p></td>
<td><p>(Non-secure) port information.</p></td>
</tr>
<tr>
<td><p><code>secureHealthCheckUrl</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>The secure health check URL.</p></td>
</tr>
<tr>
<td><p><code>securePort</code></p></td>
<td><p><a href="../config/io_helidon_integrations_eureka_PortInfoConfig.md">PortInfoConfig</a></p></td>
<td><p><code>io.helidon.integrations.eureka.InstanceInfoConfigBlueprint.create()</code></p></td>
<td><p>Secure port information.</p></td>
</tr>
<tr>
<td><p><code>secureVipAddress</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The secure VIP address.
&lt;abbr&gt;VIP&lt;/abbr&gt; stands for Virtual IP.</p></td>
</tr>
<tr>
<td><p><code>statusPageUrl</code></p></td>
<td><p>URI</p></td>
<td></td>
<td><p>The status page URL.</p></td>
</tr>
<tr>
<td><p><code>statusPageUrlPath</code></p></td>
<td><p>string</p></td>
<td><p><code>/Status</code></p></td>
<td><p>The status page URL path (used if
status page URL is not explicitly set).</p></td>
</tr>
<tr>
<td><p><code>traffic.enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether traffic is enabled on startup
(normally <code>true</code>).</p></td>
</tr>
<tr>
<td><p><code>vipAddress</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The VIP address.
&lt;abbr&gt;VIP&lt;/abbr&gt; stands for Virtual IP.</p></td>
</tr>
</tbody>
</table>
