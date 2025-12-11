Type:
[io.helidon.faulttolerance.CircuitBreaker](https://helidon.io/docs/v4/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/CircuitBreaker.html)

This is a standalone configuration type, prefix from configuration root:
`fault-tolerance.circuit-breakers`

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
<td><p><code>delay</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT5S</code></p></td>
<td><p>How long to wait before transitioning
from open to half-open state.</p></td>
</tr>
<tr>
<td><p><code>enable-metrics</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Flag to enable metrics for this
instance. The value of this flag is combined with the global config
entry
io.helidon.faulttolerance.FaultTolerance.FT_METRICS_DEFAULT_ENABLED. If
either of these flags is <code>true</code>, then metrics will be enabled
for the instance.</p></td>
</tr>
<tr>
<td><p><code>error-ratio</code></p></td>
<td><p>int</p></td>
<td><p><code>60</code></p></td>
<td><p>How many failures out of 100 will
trigger the circuit to open. This is adapted to the volume() used to
handle the window of requests. If errorRatio is 40, and volume is 10, 4
failed requests will open the circuit. Default is
DEFAULT_ERROR_RATIO.</p>
<p>See volume()</p></td>
</tr>
<tr>
<td><p><code>success-threshold</code></p></td>
<td><p>int</p></td>
<td><p><code>1</code></p></td>
<td><p>How many successful calls will close a
half-open circuit. Nevertheless, the first failed call will open the
circuit again. Default is DEFAULT_SUCCESS_THRESHOLD.</p></td>
</tr>
<tr>
<td><p><code>volume</code></p></td>
<td><p>int</p></td>
<td><p><code>10</code></p></td>
<td><p>Rolling window size used to calculate
ratio of failed requests. Default is DEFAULT_VOLUME.</p>
<p>See errorRatio()</p></td>
</tr>
</tbody>
</table>
