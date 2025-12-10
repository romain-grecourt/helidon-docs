Type:
[io.helidon.webserver.concurrency.limits.LimitsFeature](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.concurrency.limits/io/helidon/webserver/concurrency/limits/LimitsFeature.html)

Config key:
```text
limits
```

This type provides the following service implementations:

- `io.helidon.webserver.spi.ServerFeatureProvider`

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
<td><p><code>concurrency-limit</code></p></td>
<td><p>io.helidon.common.concurrency.limits.Limit
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_common_concurrency_limits_AimdLimit.md">aimd
(AimdLimit)</a></p></li>
<li><p><a href="../config/io_helidon_common_concurrency_limits_FixedLimit.md">fixed
(FixedLimit)</a></p></li>
</ul></td>
<td></td>
<td><p>Concurrency limit to use to limit
concurrent execution of incoming requests. The default is to have
unlimited concurrency.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether this feature is enabled,
defaults to <code>true</code>.</p></td>
</tr>
<tr>
<td><p><code>sockets</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>List of sockets to register this
feature on. If empty, it would get registered on all sockets.</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>2000.0</code></p></td>
<td><p>Weight of the context feature. As it is
used by other features, the default is quite high:
LimitsFeature.WEIGHT.</p></td>
</tr>
</tbody>
</table>
