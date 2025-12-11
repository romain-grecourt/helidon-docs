Type:
[io.helidon.webclient.api.Proxy](https://helidon.io/docs/v4/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/Proxy.html)

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
<td><p><code>force-http-connect</code></p></td>
<td><p>boolean</p></td>
<td></td>
<td><p>Forces HTTP CONNECT with the proxy
server. Otherwise it will not execute HTTP CONNECT when the request is
plain HTTP with no authentication.</p></td>
</tr>
<tr>
<td><p><code>host</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets a new host value.</p></td>
</tr>
<tr>
<td><p><code>no-proxy</code></p></td>
<td><p>string[]</p></td>
<td></td>
<td><p>Configure a host pattern that is not
going through a proxy.</p>
<p>Options are:</p>
<ul>
<li><p>IP Address, such as <code>192.168.1.1</code></p></li>
<li><p>IP V6 Address, such as
<code>[2001:db8:85a3:8d3:1319:8a2e:370:7348]</code></p></li>
<li><p>Hostname, such as <code>localhost</code></p></li>
<li><p>Domain name, such as <code>helidon.io</code></p></li>
<li><p>Domain name and all sub-domains, such as <code>.helidon.io</code>
(leading dot)</p></li>
<li><p>Combination of all options from above with a port, such as
<code>.helidon.io:80</code></p></li>
</ul></td>
</tr>
<tr>
<td><p><code>password</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets a new password for the
proxy.</p></td>
</tr>
<tr>
<td><p><code>port</code></p></td>
<td><p>int</p></td>
<td></td>
<td><p>Sets a port value.</p></td>
</tr>
<tr>
<td><p><code>type</code></p></td>
<td><p>ProxyType (NONE, SYSTEM, HTTP)</p></td>
<td><p><code>HTTP</code></p></td>
<td><p>Sets a new proxy type.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>NONE</code>: No proxy.</p></li>
<li><p><code>SYSTEM</code>: Proxy obtained from system.</p></li>
<li><p><code>HTTP</code>: HTTP proxy.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>username</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Sets a new username for the
proxy.</p></td>
</tr>
</tbody>
</table>
