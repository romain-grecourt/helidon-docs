Type:
[io.helidon.security.SecurityTime](https://helidon.io/docs/v4/apidocs/io.helidon.security/io/helidon/security/SecurityTime.html)

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
<td><p><code>day-of-month</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>hour-of-day</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>millisecond</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>minute</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>month</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>second</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
<tr>
<td><p><code>shift-by-seconds</code></p></td>
<td><p>long</p></td>
<td><p><code>0</code></p></td>
<td><p>Configure a time-shift in seconds, to
move the current time to past or future.</p></td>
</tr>
<tr>
<td><p><code>time-zone</code></p></td>
<td><p>ZoneId</p></td>
<td></td>
<td><p>Override current time zone. The time
will represent the SAME instant, in an explicit timezone.</p>
<p>If we are in a UTC time zone and you set the timezone to
"Europe/Prague", the time will be shifted by the offset of Prague (e.g.
if it is noon right now in UTC, you would get 14:00).</p></td>
</tr>
<tr>
<td><p><code>year</code></p></td>
<td><p>long</p></td>
<td></td>
<td><p>Set an explicit value for one of the
time fields (such as ChronoField.YEAR).</p></td>
</tr>
</tbody>
</table>
