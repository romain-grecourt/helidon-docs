Type:
[io.helidon.http.media.MediaContext](https://helidon.io/docs/v4/apidocs/io.helidon.http.media/io/helidon/http/media/MediaContext.html)

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
<td><p><code>fallback</code></p></td>
<td><p><a href="../config/io_helidon_http_media_MediaContext.md">MediaContext</a></p></td>
<td></td>
<td><p>Existing context to be used as a
fallback for this context.</p></td>
</tr>
<tr>
<td><p><code>media-supports</code></p></td>
<td><p>io.helidon.http.media.MediaSupport[]
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_http_media_jackson_JacksonSupport.md">jackson
(JacksonSupport)</a></p></li>
<li><p><a href="../config/io_helidon_http_media_jsonb_JsonbSupport.md">jsonb
(JsonbSupport)</a></p></li>
<li><p><a href="../config/io_helidon_http_media_gson_GsonSupport.md">gson
(GsonSupport)</a></p></li>
</ul></td>
<td></td>
<td><p>Media supports to use. This instance
has priority over provider(s) discovered by service loader. The
providers are used in order of calling this method, where the first
support added is the first one to be queried for readers and
writers.</p></td>
</tr>
<tr>
<td><p><code>register-defaults</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Should we register defaults of Helidon,
such as String media support.</p></td>
</tr>
</tbody>
</table>
