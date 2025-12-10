Type:
[io.helidon.integrations.langchain4j.providers.oracle.OracleEmbeddingTableConfig](https://helidon.io/docs/v4/apidocs/io.helidon.integrations.langchain4j.providers.oracle/io/helidon/integrations/langchain4j/providers/oracle/OracleEmbeddingTableConfig.html)

This is a standalone configuration type, prefix from configuration root:
`langchain4j.oracle.embedding-store.embedding-table`

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
<td><p><code>create-option</code></p></td>
<td><p>CreateOption (CREATE_NONE,
CREATE_IF_NOT_EXISTS, CREATE_OR_REPLACE)</p></td>
<td></td>
<td><p>The create option, which defines the
behavior when creating the embedding table.</p>
<p>@return an java.util.Optional containing the create option if set;
otherwise, an empty java.util.Optional</p></td>
</tr>
<tr>
<td><p><code>embedding-column</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The name of the embedding column in the
embedding table.</p>
<p>@return an java.util.Optional containing the embedding column name if
set; otherwise, an empty java.util.Optional</p></td>
</tr>
<tr>
<td><p><code>id-column</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The name of the ID column in the
embedding table.</p>
<p>@return an java.util.Optional containing the ID column name if set;
otherwise, an empty java.util.Optional</p></td>
</tr>
<tr>
<td><p><code>metadata-column</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The name of the metadata column in the
embedding table.</p>
<p>@return an java.util.Optional containing the metadata column name if
set; otherwise, an empty java.util.Optional</p></td>
</tr>
<tr>
<td><p><code>name</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The name of the embedding table.</p>
<p>@return an java.util.Optional containing the table name if set;
otherwise, an empty java.util.Optional</p></td>
</tr>
<tr>
<td><p><code>text-column</code></p></td>
<td><p>string</p></td>
<td></td>
<td><p>The name of the text column in the
embedding table.</p>
<p>@return an java.util.Optional containing the text column name if set;
otherwise, an empty java.util.Optional</p></td>
</tr>
</tbody>
</table>
