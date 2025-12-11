Type:
[io.helidon.common.configurable.ThreadPoolSupplier](https://helidon.io/docs/v4/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.html)

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
<td><p><code>core-pool-size</code></p></td>
<td><p>int</p></td>
<td><p><code>10</code></p></td>
<td><p>Core pool size of the thread pool
executor. Defaults to DEFAULT_CORE_POOL_SIZE.</p></td>
</tr>
<tr>
<td><p><code>growth-rate</code></p></td>
<td><p>int</p></td>
<td><p><code>0</code></p></td>
<td><p>The percentage of task submissions that
should result in adding threads, expressed as a value from 1 to 100. The
rate applies only when all of the following are true:</p>
<ul>
<li><p>the pool size is below the maximum, and</p></li>
<li><p>there are no idle threads, and</p></li>
<li><p>the number of tasks in the queue exceeds the
<code>growthThreshold</code></p></li>
</ul>
<p>For example, a rate of 20 means that while these conditions are met
one thread will be added for every 5 submitted tasks.</p>
<p>Defaults to DEFAULT_GROWTH_RATE</p></td>
</tr>
<tr>
<td><p><code>growth-threshold</code></p></td>
<td><p>int</p></td>
<td><p><code>1000</code></p></td>
<td><p>The queue size above which pool growth
will be considered if the pool is not fixed size. Defaults to
DEFAULT_GROWTH_THRESHOLD.</p></td>
</tr>
<tr>
<td><p><code>is-daemon</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Is daemon of the thread pool executor.
Defaults to DEFAULT_IS_DAEMON.</p></td>
</tr>
<tr>
<td><p><code>keep-alive</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT3M</code></p></td>
<td><p>Keep alive of the thread pool executor.
Defaults to DEFAULT_KEEP_ALIVE.</p></td>
</tr>
<tr>
<td><p><code>max-pool-size</code></p></td>
<td><p>int</p></td>
<td><p><code>50</code></p></td>
<td><p>Max pool size of the thread pool
executor. Defaults to DEFAULT_MAX_POOL_SIZE.</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Name of this thread pool
executor.</p></td>
</tr>
<tr>
<td><p><code>queue-capacity</code></p></td>
<td><p>int</p></td>
<td><p><code>10000</code></p></td>
<td><p>Queue capacity of the thread pool
executor. Defaults to DEFAULT_QUEUE_CAPACITY.</p></td>
</tr>
<tr>
<td><p><code>should-prestart</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether to prestart core threads in
this thread pool executor. Defaults to DEFAULT_PRESTART.</p></td>
</tr>
<tr>
<td><p><code>thread-name-prefix</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Name prefix for threads in this thread
pool executor. Defaults to DEFAULT_THREAD_NAME_PREFIX.</p></td>
</tr>
<tr>
<td><p><code>virtual-threads</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>When configured to <code>true</code>,
an unbounded virtual executor service (project Loom) will be used.</p>
<p>If enabled, all other configuration options of this executor service
are ignored!</p></td>
</tr>
</tbody>
</table>
