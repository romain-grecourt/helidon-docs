Type:
[io.helidon.webserver.staticcontent.MemoryCache](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.staticcontent/io/helidon/webserver/staticcontent/MemoryCache.html)

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
<td><p><code>capacity</code></p></td>
<td><p>Size</p></td>
<td><p><code>50 mB</code></p></td>
<td><p>Capacity of the cached bytes of file
content. If set to <code>0</code>, the cache is unlimited. To disable
caching, set enabled() to <code>false</code>, or do not configure a
memory cache at all.</p>
<p>The capacity must be less than java.lang.Long.MAX_VALUE bytes, though
you must be careful still, as it must fit into the heap size.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether the cache is enabled, defaults
to <code>true</code>.</p></td>
</tr>
</tbody>
</table>
