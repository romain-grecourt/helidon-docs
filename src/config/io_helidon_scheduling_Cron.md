Type:
[io.helidon.scheduling.Cron](https://helidon.io/docs/v4/apidocs/io.helidon.scheduling/io/helidon/scheduling/Cron.html)

# Configuration options

<table>
<caption>Required configuration options</caption>
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
<td><p><code>expression</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>Cron expression for specifying period
of execution.</p>
<p><strong>Examples:</strong></p>
<ul>
<li><p><code>0/2 * * * * ? *</code> - Every 2 seconds</p></li>
<li><p><code>0 45 9 ? * *</code> - Every day at 9:45</p></li>
<li><p><code>0 15 8 ? * MON-FRI</code> - Every workday at 8:15</p></li>
</ul></td>
</tr>
</tbody>
</table>

| key | type | default value | description |
|----|----|----|----|
| `concurrent` | boolean | `true` | Allow concurrent execution if previous task didn’t finish before next execution. Default value is `true`. |
| `id` | string |  | Identification of the started task. This can be used to later look up the instance, for example to cancel it. |

Optional configuration options
