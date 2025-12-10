Type:
[io.helidon.integrations.oci.metrics.OciMetricsSupport](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.oci.metrics/io/helidon/integrations/oci/metrics/OciMetricsSupport.html)

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
<td><p><code>batch-delay</code></p></td>
<td><p>long</p></td>
<td><p><code>1</code></p></td>
<td><p>Sets the delay interval if metrics are
posted in batches (defaults to DEFAULT_BATCH_DELAY).</p></td>
</tr>
<tr>
<td><p><code>batch-size</code></p></td>
<td><p>int</p></td>
<td><p><code>50</code></p></td>
<td><p>Sets the maximum no. of metrics to send
in a batch (defaults to DEFAULT_BATCH_SIZE).</p></td>
</tr>
<tr>
<td><p><code>compartment-id</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets the compartment ID.</p></td>
</tr>
<tr>
<td><p><code>delay</code></p></td>
<td><p>long</p></td>
<td><p><code>60</code></p></td>
<td><p>Sets the delay interval between metric
posting (defaults to DEFAULT_SCHEDULER_DELAY).</p></td>
</tr>
<tr>
<td><p><code>description-enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Sets whether the description should be
enabled or not.</p>
<pre><code>Defaults to `true`.</code></pre></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Sets whether metrics transmission to
OCI is enabled.</p>
<pre><code>Defaults to `true`.</code></pre></td>
</tr>
<tr>
<td><p><code>initial-delay</code></p></td>
<td><p>long</p></td>
<td><p><code>1</code></p></td>
<td><p>Sets the initial delay before metrics
are sent to OCI (defaults to DEFAULT_SCHEDULER_INITIAL_DELAY).</p></td>
</tr>
<tr>
<td><p><code>namespace</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets the namespace.</p></td>
</tr>
<tr>
<td><p><code>resource-group</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets the resource group.</p></td>
</tr>
<tr>
<td><p><code>scheduling-time-unit</code></p></td>
<td><p>TimeUnit (NANOSECONDS, MICROSECONDS,
MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)</p></td>
<td><p><code>TimeUnit.SECONDS</code></p></td>
<td><p>Sets the time unit applied to the
initial delay and delay values (defaults to
<code>TimeUnit.SECONDS</code>).</p></td>
</tr>
<tr>
<td><p><code>scopes</code></p></td>
<td><p>String[]</p></td>
<td><p><code>All scopes</code></p></td>
<td><p>Sets which metrics scopes (e.g., base,
vendor, application) should be sent to OCI.</p>
<pre><code>If this method is never invoked, defaults to all scopes.</code></pre></td>
</tr>
</tbody>
</table>
