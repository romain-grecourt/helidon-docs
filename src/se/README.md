Helidon SE is Helidon’s foundational set of APIs and, as of Helidon 4,
it uses virtual threads to enable these APIs to change from asynchronous
to blocking.

# Components

The REST framework for Helidon SE is the Helidon WebServer. It was built
from the ground up to take full advantage of Java 21’s virtual threads.

Helidon SE supports a number of additional Helidon features:

| Title                | Description                                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------|
| [Config]             | A flexible configuration framework with support for multiple sources and formats                 |
| [CORS]               | Add support for CORS to your application using a Helidon module                                  |
| [DB Client]          | Provides a unified API for working with databases                                                |
| [GraphQL]            | Build GraphQL servers                                                                            |
| [gRPC]               | Build gRPC servers and clients                                                                   |
| [Health Checks]      | Expose health statuses of your applications                                                      |
| [Injection]          | Use of the Helidon injection in your applications                                                |
| [JSON Schema]        | Creation of the JSON Schema in your applications                                                 |
| [Metrics]            | Instrumentation to expose metrics of your applications                                           |
| [OpenAPI]            | Support OpenAPI from your application                                                            |
| [Reactive Messaging] | Use prepared tools for repetitive use case scenarios                                             |
| [Reactive Streams]   | APIs to work with reactive streams in Helidon                                                    |
| [Security]           | A tool-chain to handle authentication, authorization and context propagation                     |
| [Tracing]            | Profile and monitor your applications across multiple services                                   |
| [WebClient]          | HTTP client that handles responses to the HTTP requests                                          |
| [WebServer]          | A programmatic HTTP API that uses virtual threads to handle nearly unlimited concurrent requests |
| [WebSocket]          | Enables Java applications to participate in WebSocket interactions as both servers and clients   |

# Upgrade

In case you need to upgrade the version of Helidon, follow the upgrade guides:

| Title                     | Description                                                            |
|---------------------------|------------------------------------------------------------------------|
| [Upgrade from 1.x to 2.x] | Follow this guide to migrate your application from Helidon 1.x to 2.x. |
| [Upgrade from 2.x to 3.x] | Follow this guide to migrate your application from Helidon 2.x to 3.x. |
| [Upgrade from 3.x to 4.x] | Follow this guide to migrate your application from Helidon 3.x to 4.x. |

# Next Steps

- Follow the step-by-step [guides] to build your applications using Helidon SE.
- Browse the Helidon [javadocs]

[Config]: ./config/introduction.md
[CORS]: ./cors.md
[DB Client]: ./dbclient.md
[GraphQL]: ./graphql.md
[gRPC]: ./grpc/server.md
[Health Checks]: ./health.md
[Injection]: ./injection/injection.md
[JSON Schema]: ./json-schema.md
[Metrics]: ./metrics/metrics.md
[OpenAPI]: ./openapi/openapi.md
[Reactive Messaging]: ./reactive-messaging.md
[Reactive Streams]: ./reactivestreams/engine.md
[Security]: ./security/introduction.md
[Tracing]: ./tracing.md
[WebClient]: ./webclient.md
[WebServer]: ./webserver/webserver.md
[WebSocket]: ./websocket.md
[Upgrade from 1.x to 2.x]: ./guides/upgrade.md
[Upgrade from 2.x to 3.x]: ./guides/upgrade_3x.md
[Upgrade from 3.x to 4.x]: ./guides/upgrade_4x.md
[guides]: ./guides/README.md
[javadocs]: https://helidon.io/docs/v4/apidocs
