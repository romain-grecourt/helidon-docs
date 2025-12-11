Type:
[io.helidon.webserver.observe.ObserveFeature](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.observe/io/helidon/webserver/observe/ObserveFeature.html)

Config key:
```text
observe
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
<td><p><code>cors</code></p></td>
<td><p><a href="../config/io_helidon_cors_CrossOriginConfig.md">CrossOriginConfig</a></p></td>
<td><p><code>@io.helidon.cors.CrossOriginConfig@.create()</code></p></td>
<td><p>Cors support inherited by each observe
provider, unless explicitly configured.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether the observe support is
enabled.</p></td>
</tr>
<tr>
<td><p><code>endpoint</code></p></td>
<td><p>string</p></td>
<td><p><code>/observe</code></p></td>
<td><p>Root endpoint to use for observe
providers. By default, all observe endpoint are under this root
endpoint.</p>
<p>Example:</p>
<p>If root endpoint is <code>/observe</code> (the default), and default
health endpoint is <code>health</code> (relative), health endpoint would
be <code>/observe/health</code>.</p></td>
</tr>
<tr>
<td><p><code>observers</code></p></td>
<td><p>io.helidon.webserver.observe.spi.Observer[]
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_webserver_observe_log_LogObserver.md">log
(LogObserver)</a></p></li>
<li><p><a href="../config/io_helidon_webserver_observe_tracing_TracingObserver.md">tracing
(TracingObserver)</a></p></li>
<li><p><a href="../config/io_helidon_webserver_observe_config_ConfigObserver.md">config
(ConfigObserver)</a></p></li>
<li><p><a href="../config/io_helidon_webserver_observe_info_InfoObserver.md">info
(InfoObserver)</a></p></li>
<li><p><a href="../config/io_helidon_webserver_observe_metrics_MetricsObserver.md">metrics
(MetricsObserver)</a></p></li>
<li><p><a href="../config/io_helidon_webserver_observe_health_HealthObserver.md">health
(HealthObserver)</a></p></li>
</ul></td>
<td></td>
<td><p>Observers to use with this observe
features. Each observer type is registered only once, unless it uses a
custom name (default name is the same as the type).</p></td>
</tr>
<tr>
<td><p><code>sockets</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Sockets the observability endpoint
should be exposed on. If not defined, defaults to the default socket
(io.helidon.webserver.WebServer.DEFAULT_SOCKET_NAME. Each observer may
have its own configuration of sockets that are relevant to it, this only
controls the endpoints!</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>80.0</code></p></td>
<td><p>Change the weight of this feature. This
may change the order of registration of this feature. By default,
observability weight is ObserveFeature.WEIGHT so it is registered after
routing.</p></td>
</tr>
</tbody>
</table>
