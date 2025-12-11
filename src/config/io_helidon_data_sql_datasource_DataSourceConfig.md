Type:
[io.helidon.data.sql.datasource.DataSourceConfig](https://helidon.io/docs/v4/apidocs/io.helidon.data.sql.datasource/io/helidon/data/sql/datasource/DataSourceConfig.html)

This is a standalone configuration type, prefix from configuration root:
`data.sources.sql`

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
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td><p><code>@default</code></p></td>
<td><p>javax.sql.DataSource name. Optional
name to distinguish several data sources of the same type. First
available data source is returned when name is not set.</p></td>
</tr>
<tr>
<td><p><code>provider</code></p></td>
<td><p>io.helidon.data.sql.datasource.ProviderConfig
(service provider interface)</p>
<p>Such as:</p>
<ul>
<li><p><a href="../config/io_helidon_data_sql_datasource_hikari_HikariDataSourceConfig.md">hikari
(HikariDataSourceConfig)</a></p></li>
<li><p><a href="../config/io_helidon_data_sql_datasource_jdbc_JdbcDataSourceConfig.md">jdbc
(JdbcDataSourceConfig)</a></p></li>
<li><p><a href="../config/io_helidon_data_sql_datasource_ucp_UcpDataSourceConfig.md">ucp
(UcpDataSourceConfig)</a></p></li>
</ul></td>
<td></td>
<td><p>Configuration of the used provider,
such as UCP.</p></td>
</tr>
</tbody>
</table>
