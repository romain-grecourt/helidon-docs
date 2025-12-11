# Introduction

Helidon MP is an Eclipse MicroProfile 6.1 runtime that allows the
Jakarta EE community to run microservices in a portable way. It is
designed for ease of use and provides Spring Boot like development
experience with heavy usage of dependency injection and annotations.

Even though Helidon MP supports Jakarta EE APIs it does not require an
application server. Helidon MP applications are stand-alone Java
applications running in their own JVM powered by Helidon WebServer. So
you get all the benefits of a low overhead server built on Java virtual
threads.

# Supported Jakarta EE Specifications

| Specification                                  | Version                     | Description                                                 |
|------------------------------------------------|-----------------------------|-------------------------------------------------------------|
| Jakarta Bean Validation                        | [3.0][bean-validation-spec] | Object level constraint declaration and validation facility |
| Jakarta Context and Dependency Injection (CDI) | [4.0][cdi-spec]             | Declarative dependency injection and supporting services    |
| Jakarta JSON Processing (JSON-P)               | [2.1][jsonp-spec]           | API to parse, generate, transform, and query JSON docs      |
| Jakarta JSON Binding (JSON-B)                  | [3.0][jsonb-spec]           | Binding framework for converting POJOs to/from JSON docs    |
| Jakarta RESTful Web Services (JAX-RS)          | [3.1][jaxrs-spec]           | API to develop web services following the REST pattern      |
| Jakarta Persistence (JPA)                      | [3.1][jpa-spec]             | Management of persistence and object/relational mapping     |
| Jakarta Transactions (JTA)                     | [2.0][jta-spec]             | Allows handling transactions consistent with X/Open XA-spec |
| Jakarta WebSocket                              | [2.1][websocket-spec]       | API for Server and Client Endpoints for WebSocket protocol  |

# Supported MicroProfile Specifications

| Specification                           | Version                           | Description                                                                                                     |
|-----------------------------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------|
| MicroProfile Config                     | [3.1][mp-config-spec]             | A flexible configuration framework with support for multiple sources and formats                                |
| MicroProfile Fault Tolerance            | [4.0.2][mp-ft-spec]               | Common strategies for various system problems such as time-outs, retries, Circuit Breaker, etc.                 |
| MicroProfile GraphQL                    | [2.0][mp-graphql-spec]            | API for working with GraphQL                                                                                    |
| MicroProfile Health                     | [4.0][mp-health-spec]             | Health checks for automatic service restart/shutdown                                                            |
| MicroProfile JWT Auth                   | [2.1][mp-jwt-auth-spec]           | Defines a compact and self-contained way for securely transmitting information between parties as a JSON object |
| MicroProfile Long-Running Actions (LRA) | [2.0][mp-lra-spec]                | Distributed transactions for microservices following SAGA pattern                                               |
| MicroProfile Metrics                    | [5.1.1][mp-metrics-spec]          | Defining and exposing telemetry data in Prometheus and JSON formats                                             |
| MicroProfile Open API                   | [3.1.1][mp-openapi-spec]          | Annotations for documenting your application endpoints                                                          |
| MicroProfile OpenTracing                | [3.0][mp-opentracing-spec]        | Profile and monitor your applications across multiple services                                                  |
| MicroProfile Reactive Messaging         | [3.0][mp-reactive-messaging-spec] | Standard API for sending and receiving messages/events using streams                                            |
| MicroProfile Reactive Streams Operators | [3.0][mp-reactive-stream-spec]    | Control flow and error processing for event streams                                                             |
| MicroProfile REST Client                | [3.0][mp-rest-client-spec]        | Type-safe API for RESTful Web Services                                                                          |

# Other Components

| Component                    | Description                                                                  |
|------------------------------|------------------------------------------------------------------------------|
| [CORS](cors/cors.md)         | Cross Origin Resource Sharing                                                |
| [gRPC](grpc/server.md)       | gRPC server and client                                                       |
| [OCI SDK](integrations/oci.md) | Full set of APIs for working with OCI services                               |
| [Scheduling](scheduling.md)  | Scheduling functionality based on [Cron-utils][cron-utils]                   |
| [Security](security/security.md) | A tool-chain to handle authentication, authorization and context propagation |

# Upgrade

For upgrade from Helidon 1.x to 2.x:
- [Helidon MP 2x Upgrade Guide](guides/upgrade.md)

For upgrade from Helidon 2.x to 3.x:
- [Helidon MP 3x Upgrade Guide](guides/upgrade_3x.md)

For upgrade from Helidon 3.x to 4.x:
- [Helidon MP 4x Upgrade Guide](guides/upgrade_4x.md)

# Next Steps

- Try the [Helidon MP quickstart guides](guides/README.md)
  to get your first Helidon MP application up and running in minutes.

- Browse the [Helidon Javadocs](https://helidon.io/docs/v4/apidocs/index.html?overview-summary.html)

[cron-utils]: https://github.com/jmrozanec/cron-utils
[bean-validation-spec]: https://jakarta.ee/specifications/bean-validation/3.0/jakarta-bean-validation-spec-3.0.html
[cdi-spec]: https://jakarta.ee/specifications/cdi/4.0/jakarta-cdi-spec-4.0.html
[jsonp-spec]: https://jakarta.ee/specifications/jsonp/2.1/apidocs
[jsonb-spec]: https://jakarta.ee/specifications/jsonb/3.0/jakarta-jsonb-spec-3.0.html
[jaxrs-spec]: https://jakarta.ee/specifications/restful-ws/3.1/jakarta-restful-ws-spec-3.1.html
[jpa-spec]: https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html
[jta-spec]: https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html 
[websocket-spec]: https://jakarta.ee/specifications/websocket/2.1/jakarta-websocket-spec-2.1.html
[mp-config-spec]: https://download.eclipse.org/microprofile/microprofile-config-3.1/microprofile-config-spec-3.1.html
[mp-ft-spec]: https://download.eclipse.org/microprofile/microprofile-fault-tolerance-4.0.2/microprofile-fault-tolerance-spec-4.0.2.html
[mp-graphql-spec]: https://download.eclipse.org/microprofile/microprofile-graphql-2.0/microprofile-graphql-spec-2.0.html
[mp-health-spec]: https://download.eclipse.org/microprofile/microprofile-health-4.0/microprofile-health-spec-4.0.html
[mp-jwt-auth-spec]: https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.1/microprofile-jwt-auth-spec-2.1.html
[mp-lra-spec]: https://download.eclipse.org/microprofile/microprofile-lra-2.0/microprofile-lra-spec-2.0.html
[mp-metrics-spec]: https://download.eclipse.org/microprofile/microprofile-metrics-5.1.1/microprofile-metrics-spec-5.1.1.html
[mp-openapi-spec]: https://download.eclipse.org/microprofile/microprofile-open-api-3.1.1/microprofile-openapi-spec-3.1.1.html
[mp-opentracing-spec]: https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html
[mp-reactive-messaging-spec]: https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0/microprofile-reactive-messaging-spec-3.0.html
[mp-reactive-stream-spec]: https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-3.0/microprofile-reactive-streams-operators-spec-3.0.html
[mp-rest-client-spec]: https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html
