Type:
[io.helidon.discovery.providers.eureka.EurekaDiscovery](https://helidon.io/docs/v4/apidocs/io.helidon.discovery.providers.eureka/io/helidon/discovery/providers/eureka/EurekaDiscovery.html)

Config key:
```text
eureka
```

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
<td><p><code>cache</code></p></td>
<td><p><a href="../config/io_helidon_discovery_providers_eureka_CacheConfig.md">CacheConfig</a></p></td>
<td><p><code>io.helidon.discovery.providers.eureka.EurekaDiscoveryConfigBlueprint.create()</code></p></td>
<td><p>The CacheConfig to use controlling how
a local cache of Eureka server information is used.</p>
<p>See CacheConfig</p></td>
</tr>
<tr>
<td><p><code>client</code></p></td>
<td><p>Http1Client</p></td>
<td></td>
<td><p>The Http1Client to use to communicate
with the Eureka server. To be useful, the client must have a
io.helidon.webclient.http1.Http1ClientConfig prototype whose
io.helidon.webclient.http1.Http1ClientConfig.Builder.baseUri(io.helidon.webclient.api.ClientUri)
property is set to the endpoint of a Eureka Server instance. Often this
value will be something like {@code <a href="http://example.com:8761/eureka}">http://example.com:8761/eureka}</a>.</p>
<p>See Http1Client</p>
<p>See
io.helidon.webclient.http1.Http1ClientConfig.Builder.baseUri(io.helidon.webclient.api.ClientUri)</p></td>
</tr>
<tr>
<td><p><code>prefer-ip-address</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Whether the &lt;dfn&gt;host&lt;/dfn&gt;
component of any java.net.URI URI should be set to the IP address stored
by Eureka, or the hostname; <code>false</code> by default.</p></td>
</tr>
</tbody>
</table>
