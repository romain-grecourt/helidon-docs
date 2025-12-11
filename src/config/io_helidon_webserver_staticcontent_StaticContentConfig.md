Type:
[io.helidon.webserver.staticcontent.StaticContentFeature](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.staticcontent/io/helidon/webserver/staticcontent/StaticContentFeature.html)

Config key:
```text
static-content
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
<td><p><code>classpath</code></p></td>
<td><p><a href="../config/io_helidon_webserver_staticcontent_ClasspathHandlerConfig.md">ClasspathHandlerConfig[]</a></p></td>
<td></td>
<td><p>List of classpath based static content
handlers.</p></td>
</tr>
<tr>
<td><p><code>content-types</code></p></td>
<td><p>Map&lt;string, MediaType&gt;</p></td>
<td></td>
<td><p>Maps a filename extension to the
response content type. To have a system-wide configuration, you can use
the service loader SPI
io.helidon.common.media.type.spi.MediaTypeDetector.</p>
<p>This method can override io.helidon.common.media.type.MediaTypes
detection for a specific static content handler.</p>
<p>Handler will use a union of configuration defined here, and on the
handler here when used from configuration.</p></td>
</tr>
<tr>
<td><p><code>enabled</code></p></td>
<td><p>boolean</p></td>
<td><p><code>true</code></p></td>
<td><p>Whether this feature is enabled,
defaults to <code>true</code>.</p></td>
</tr>
<tr>
<td><p><code>memory-cache</code></p></td>
<td><p><a href="../config/io_helidon_webserver_staticcontent_MemoryCache.md">MemoryCache</a></p></td>
<td></td>
<td><p>Memory cache shared by the whole
feature. If not configured, files are not cached in memory (except for
explicitly marked files/resources in each section).</p></td>
</tr>
<tr>
<td><p><code>path</code></p></td>
<td><p><a href="../config/io_helidon_webserver_staticcontent_FileSystemHandlerConfig.md">FileSystemHandlerConfig[]</a></p></td>
<td></td>
<td><p>List of file system based static
content handlers.</p></td>
</tr>
<tr>
<td><p><code>sockets</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Sockets names (listeners) that will
host static content handlers, defaults to all configured sockets.
Default socket name is <code>@default</code>.</p>
<p>This configures defaults for all handlers.</p></td>
</tr>
<tr>
<td><p><code>temporary-storage</code></p></td>
<td><p><a href="../config/io_helidon_webserver_staticcontent_TemporaryStorage.md">TemporaryStorage</a></p></td>
<td></td>
<td><p>Temporary storage to use across all
classpath handlers. If not defined, a default one will be
created.</p></td>
</tr>
<tr>
<td><p><code>weight</code></p></td>
<td><p>double</p></td>
<td><p><code>95.0</code></p></td>
<td><p>Weight of the static content feature.
Defaults to StaticContentFeature.WEIGHT.</p></td>
</tr>
<tr>
<td><p><code>welcome</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Welcome-file name. Default for all
handlers. By default, we do not serve default files.</p></td>
</tr>
</tbody>
</table>
