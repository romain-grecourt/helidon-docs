Jaeger tracer configuration.

Type:
[io.helidon.tracing.Tracer](https://helidon.io/docs/v4/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html)

This is a standalone configuration type, prefix from configuration root:
`tracing`

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
<td><p><code>client-cert-pem</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>Certificate of client in PEM
format.</p></td>
</tr>
<tr>
<td><p><code>exporter-timeout</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT10S</code></p></td>
<td><p>Timeout of exporter requests.</p></td>
</tr>
<tr>
<td><p><code>max-export-batch-size</code></p></td>
<td><p>int</p></td>
<td><p><code>512</code></p></td>
<td><p>Maximum Export Batch Size of exporter
requests.</p></td>
</tr>
<tr>
<td><p><code>max-queue-size</code></p></td>
<td><p>int</p></td>
<td><p><code>2048</code></p></td>
<td><p>Maximum Queue Size of exporter
requests.</p></td>
</tr>
<tr>
<td><p><code>private-key-pem</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>Private key in PEM format.</p></td>
</tr>
<tr>
<td><p><code>propagation</code></p></td>
<td><p>PropagationFormat[] (B3, B3_SINGLE,
JAEGER, W3C)</p></td>
<td><p><code>JAEGER</code></p></td>
<td><p>Add propagation format to use.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>B3</code>: The Zipkin B3 trace context propagation format
using multiple headers.</p></li>
<li><p><code>B3_SINGLE</code>: B3 trace context propagation using a
single header.</p></li>
<li><p><code>JAEGER</code>: The Jaeger trace context propagation
format.</p></li>
<li><p><code>W3C</code>: The W3C trace context propagation
format.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>sampler-param</code></p></td>
<td><p>Number</p></td>
<td><p><code>1</code></p></td>
<td><p>The sampler parameter
(number).</p></td>
</tr>
<tr>
<td><p><code>sampler-type</code></p></td>
<td><p>SamplerType (CONSTANT, RATIO)</p></td>
<td><p><code>CONSTANT</code></p></td>
<td><p>Sampler type.</p>
<p>See <a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration">Sampler
types</a>.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>CONSTANT</code>: Constant sampler always makes the same
decision for all traces. It either samples all traces <code>1</code> or
none of them <code>0</code>.</p></li>
<li><p><code>RATIO</code>: Ratio of the requests to sample, double
value.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>schedule-delay</code></p></td>
<td><p>Duration</p></td>
<td><p><code>PT5S</code></p></td>
<td><p>Schedule Delay of exporter
requests.</p></td>
</tr>
<tr>
<td><p><code>span-processor-type</code></p></td>
<td><p>SpanProcessorType (SIMPLE,
BATCH)</p></td>
<td><p><code>batch</code></p></td>
<td><p>Span Processor type used.</p>
<p>Allowed values:</p>
<ul>
<li><p><code>SIMPLE</code>: Simple Span Processor.</p></li>
<li><p><code>BATCH</code>: Batch Span Processor.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>trusted-cert-pem</code></p></td>
<td><p><a href="../config/io_helidon_common_configurable_Resource.md">Resource</a></p></td>
<td></td>
<td><p>Trusted certificates in PEM
format.</p></td>
</tr>
</tbody>
</table>
