Type:
[io.helidon.webserver.observe.metrics.MetricsObserver](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.observe.metrics/io/helidon/webserver/observe/metrics/MetricsObserver.html)

This is a standalone configuration type, prefix from configuration root:
`metrics`

This type provides the following service implementations:

- `io.helidon.webserver.observe.spi.ObserveProvider`

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
<td><p><code>app-name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Value for the application tag to be
added to each meter ID.</p></td>
</tr>
<tr>
<td><p><code>app-tag-name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Name for the application tag to be
added to each meter ID.</p></td>
</tr>
<tr>
<td><p><code>built-in-meter-name-format</code></p></td>
<td><p>BuiltInMeterNameFormat (SNAKE,
CAMEL)</p></td>
<td><p><code>BuiltInMeterNameFormat.CAMEL</code></p></td>
<td><p>Output format for built-in meter
names.</p>
<pre><code>BuiltInMeterNameFormat.SNAKE selects &quot;snake_case&quot; which does not conform to the MicroProfile
Metrics specification.</code></pre>
<p>Allowed values:</p>
<ul>
<li><p><code>SNAKE</code>: Snake-case.</p></li>
<li><p><code>CAMEL</code>: Camel-case (which is compatible with the
MicroProfile Metrics spec).</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether metrics functionality is
enabled.</p></td>
</tr>
<tr>
<td><p><code>endpoint</code></p></td>
<td><p>string</p></td>
<td><p><code>metrics</code></p></td>
<td></td>
</tr>
<tr>
<td><p><span class="line-through"><code>gc-time-type</code></span></p></td>
<td><p>GcTimeType (GAUGE, COUNTER)</p></td>
<td><p><code>GcTimeType.COUNTER</code></p></td>
<td><p><strong>Deprecated</strong> Whether the
<code>gc.time</code> meter should be registered as a gauge (vs. a
counter). The <code>gc.time</code> meter is inspired by the MicroProfile
Metrics spec, in which the meter was originally checked to be a counter
but starting in 5.1 was checked be a gauge. For the duration of Helidon
4.x users can choose which type of meter Helidon registers for
<code>gc.time</code>. @deprecated Provided for backward compatibility
only; no replacement</p>
<p>Allowed values:</p>
<ul>
<li><p><code>GAUGE</code>: Implement the meter as a gauge. This is
backward-incompatible with Helidon 4.0.x releases but complies with
MicroProfile 5.1.</p></li>
<li><p><code>COUNTER</code>: Implement the meter as a counter. This is
backward-compatible with Helidon 4.0.x releases but does not comply with
MicroProfile 5.1.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>key-performance-indicators</code></p></td>
<td><p><a href="../config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig.md">KeyPerformanceIndicatorMetricsConfig</a></p></td>
<td></td>
<td><p>Key performance indicator metrics
settings.</p></td>
</tr>
<tr>
<td><p><code>permit-all</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to allow anybody to access the
endpoint.</p>
<p>See roles()</p></td>
</tr>
<tr>
<td><p><span class="line-through"><code>rest-request-enabled</code></span></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p><strong>Deprecated</strong> Whether
automatic REST request metrics should be measured (as indicated by the
deprecated config key <code>rest-request-enabled</code>, the config key
using a hyphen instead of a dot separator).</p>
<p>@deprecated Use <code>rest-request.enabled</code> instead.</p></td>
</tr>
<tr>
<td><p><code>rest-request.enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether automatic REST request metrics
should be measured.</p></td>
</tr>
<tr>
<td><p><code>roles</code></p></td>
<td><p>string[]</p></td>
<td><p><code>observe</code></p></td>
<td><p>Hints for role names the user is
expected to be in.</p></td>
</tr>
<tr>
<td><p><code>scoping</code></p></td>
<td><p><a href="../config/io_helidon_metrics_api_ScopingConfig.md">ScopingConfig</a></p></td>
<td></td>
<td><p>Settings related to scoping
management.</p></td>
</tr>
<tr>
<td><p><code>tags</code></p></td>
<td><p><a href="../config/io_helidon_metrics_api_Tag.md">Tag[]</a></p></td>
<td></td>
<td><p>Global tags.</p></td>
</tr>
<tr>
<td><p><code>timers.json-units-default</code></p></td>
<td><p>TimeUnit (NANOSECONDS, MICROSECONDS,
MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)</p></td>
<td></td>
<td><p>Default units for timer output in JSON
if not specified on a given timer.</p>
<p>If the configuration key is absent, the Helidon JSON output uses
java.util.concurrent.TimeUnit.SECONDS. If the configuration key is
present, Helidon formats each timer using that timer’s specific units
(if set) and the config value otherwise.</p></td>
</tr>
<tr>
<td><p><code>virtual-threads.enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether Helidon should expose meters
related to virtual threads.</p></td>
</tr>
<tr>
<td><p><code>virtual-threads.pinned.threshold</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT0.020S</code></p></td>
<td><p>Threshold for sampling pinned virtual
threads to include in the pinned threads meter.</p></td>
</tr>
</tbody>
</table>
