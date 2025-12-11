Type:
[io.helidon.discovery.providers.eureka.CacheConfig](https://helidon.io/docs/v4/apidocs/io.helidon.discovery.providers.eureka/io/helidon/discovery/providers/eureka/CacheConfig.html)

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
<td><p><code>compute-changes</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether the state of the cache should
be computed from changes reported by Eureka, or replaced in full;
<code>true</code> by default.</p></td>
</tr>
<tr>
<td><p><code>defer-sync</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether to defer immediate cache
synchronization; <code>false</code> by default.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether a local cache of Eureka
information is used or not; <code>true</code> by default.</p></td>
</tr>
<tr>
<td><p><code>fetch-thread-name</code></p></td>
<td><p>string</p></td>
<td><p><code>Eureka registry fetch thread</code></p></td>
<td><p>The name of the Thread used to retrieve
service information from the Eureka server; "Eureka registry fetch
thread" by default.</p>
<p>See Thread.Builder.name(String)</p></td>
</tr>
<tr>
<td><p><code>sync-interval</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT30S</code></p></td>
<td><p>The time between retrievals of service
information from the Eureka server; 30 seconds by default.</p>
<p>See Duration.parse(CharSequence)</p></td>
</tr>
</tbody>
</table>
