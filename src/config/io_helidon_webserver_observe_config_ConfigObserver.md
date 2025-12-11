Type:
[io.helidon.webserver.observe.config.ConfigObserver](https://helidon.io/docs/v4/apidocs/io.helidon.webserver.observe.config/io/helidon/webserver/observe/config/ConfigObserver.html)

Config key:
```text
config
```

This type provides the following service implementations:

- `io.helidon.webserver.observe.spi.ObserveProvider`

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
<td><p><code>endpoint</code></p></td>
<td><p>string</p></td>
<td><p><code>config</code></p></td>
<td></td>
</tr>
<tr>
<td><p><code>permit-all</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Permit all access, even when not
authorized.</p></td>
</tr>
<tr>
<td><p><code>secrets</code></p></td>
<td><p>string[]</p></td>
<td><p><code>.*password, .*passphrase, .*secret</code></p></td>
<td><p>Secret patterns (regular expressions)
to exclude from output. Any pattern that matches a key will cause the
output to be obfuscated and not contain the value.</p>
<p>Patterns always added:</p>
<ul>
<li><p><code>.*password</code></p></li>
<li><p><code>.*passphrase</code></p></li>
<li><p><code>.*secret</code></p></li>
</ul></td>
</tr>
</tbody>
</table>
