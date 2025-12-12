# Overview

The Helidon JSON-RPC client API is part of the WebClient API, and can be
used to create [JSON-RPC 2.0](https://www.jsonrpc.org/specification)
client applications. It offers built-in support to invoke JSON-RPC
server methods with minimal effort, including handling of JSON
parameters and processing of JSON responses.

# Maven Coordinates

To enable WebClient/JSON-RPC, add the following dependency to your
project’s `pom.xml` (see [Managing Dependencies](../../about/managing-dependencies.md)).

```xml
<dependency>
    <groupId>io.helidon.webclient</groupId>
    <artifactId>helidon-webclient-jsonrpc</artifactId>
</dependency>
```

# Usage

## Simple Requests

```java
void sample() {
    var webClient = WebClient.builder()
            .baseUri("http://localhost:8080/rpc")
            .build();

    // Obtain the JsonRpcClient instance from a WebClient instance
    var rpcClient = webClient.client(JsonRpcClient.PROTOCOL);

    // Create the JSON-RPC request
     rpcReq = client.rpcMethod("start")
            .rpcId(1)

             // Parameters must be JSON values
             // simple Java types such as `String` and `int` are supported
            .param("when", "NOW")
            .param("duration", "PT0S")
            .path("/machine");

    // Get the JSON-RPC response
    try (var rpcRes = rpcReq.submit()) {
        if (rpcRes.status() == Status.OK_200 && rpcRes.result().isPresent()) {

            // convert the response entity to a POJO using JSON-B
            var result = rpcRes.result().get().as(StartStopResult.class);
            if (result.status().equals("RUNNING")) {
                System.out.println("SUCCESS");
            }
        }
    }
}
```

> [!NOTE]
> The HTTP status code is independent of any other error code in a
> JSON-RPC error response.

Every JSON-RPC response contains either a result or an error, and that
is the reason why `res.result()` returns an optional value.

See [JSON-RPC Server](../../se/jsonrpc/server.md) for more information on these types.

## Batch Requests

The JSON-RPC client API also supports batching, whereby multiple method
invocations can be aggregated and sent as a single unit for processing.
The response to a batch request includes an entry for each of the
invocations in the request; invocations are executed in order and can
independently succeed or fail.

Here is an example that constructs a batch request to start and then
stop a machine:

```java
void sample() {
    var webClient = WebClient.builder()
            .baseUri("http://localhost:8080/rpc")
            .build();

    // Obtain the JsonRpcClient instance from a WebClient instance
    var rpcClient = webClient.client(JsonRpcClient.PROTOCOL);

    // Make 2 batch requests
    var rpcReq = rpcClient.batch("/machine")
            .rpcMethod("start")
            .rpcId(1)
            .param("when", "NOW")
            .param("duration", "PT0S")
            .addToBatch()
            .rpcMethod("stop")
            .rpcId(2)
            .param("when", "NOW")
            .addToBatch();

    try (var batchRes = rpcReq.submit()) {
        if (batchRes.status() == Status.OK_200) {

            // iterate over the nested responses
            for (var rpcRes : batchRes) {
                // convert the result entity to a POJO using JSON-B
                var entity = rpcRes.result().get().as(StartStopResult.class);
                System.out.println(entity.status());
            }
        }
    }
}
```

# Configuration

At the time of writing, there is no configuration that is specific to
the JSON-RPC client API other than what is already provided by the
WebClient API itself. Note that the type `JsonRpcClientConfig`, that can
be used to create a `JsonRpcClient` instance,  extends
`HttpClientConfig`, so HTTP configuration applies to JSON-RPC clients as
well.

# Examples

The code snippets in this document are part of the JSON-RPC example
available here:

- [JSON-RPC Machine Example](https://github.com/helidon-io/helidon-examples/tree/helidon-4.x/examples/webserver/jsonrpc)
