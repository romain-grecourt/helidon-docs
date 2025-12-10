Type:
[io.helidon.common.configurable.ScheduledThreadPoolSupplier](https://helidon.io/docs/v4/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ScheduledThreadPoolSupplier.html)

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
<td><p><code>core-pool-size</code></p></td>
<td><p>int</p></td>
<td><p><code>16</code></p></td>
<td><p>Core pool size of the thread pool
executor. Defaults to DEFAULT_CORE_POOL_SIZE.</p></td>
</tr>
<tr>
<td><p><code>is-daemon</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Is daemon of the thread pool executor.
Defaults to DEFAULT_IS_DAEMON.</p></td>
</tr>
<tr>
<td><p><code>prestart</code></p></td>
<td><p>boolean</p></td>
<td><p><code>false</code></p></td>
<td><p>Whether to prestart core threads in
this thread pool executor. Defaults to DEFAULT_PRESTART.</p></td>
</tr>
<tr>
<td><p><code>thread-name-prefix</code></p></td>
<td><p>string</p></td>
<td><p><code>helidon-</code></p></td>
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
