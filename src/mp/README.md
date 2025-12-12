# Introduction

Helidon MP is an Eclipse MicroProfile 6.1 runtime that allows the
Jakarta EE community to run microservices in a portable way.

It is designed for ease of use and provides Spring Boot like development
experience with heavy usage of dependency injection and annotations.

Even though Helidon MP supports Jakarta EE APIs it does not require an
application server.

Helidon MP applications are stand-alone Java applications running in their own JVM powered by Helidon WebServer. So
you get all the benefits of a low overhead server built on Java virtual
threads.

# Supported Jakarta EE Specifications

| Specification                                  | Version                     |
|------------------------------------------------|-----------------------------|
| Jakarta Bean Validation                        | [3.0][bean-validation-spec] |
| Jakarta Context and Dependency Injection (CDI) | [4.0][cdi-spec]             |
| Jakarta JSON Processing (JSON-P)               | [2.1][jsonp-spec]           |
| Jakarta JSON Binding (JSON-B)                  | [3.0][jsonb-spec]           |
| Jakarta RESTful Web Services (JAX-RS)          | [3.1][jaxrs-spec]           |
| Jakarta Persistence (JPA)                      | [3.1][jpa-spec]             |
| Jakarta Transactions (JTA)                     | [2.0][jta-spec]             |
| Jakarta WebSocket                              | [2.1][websocket-spec]       |

# Supported MicroProfile Specifications


| Specification                           | Version                           |
|-----------------------------------------|-----------------------------------|
| MicroProfile Config                     | [3.1][mp-config-spec]             |
| MicroProfile Fault Tolerance            | [4.0.2][mp-ft-spec]               |
| MicroProfile GraphQL                    | [2.0][mp-graphql-spec]            |
| MicroProfile Health                     | [4.0][mp-health-spec]             |
| MicroProfile JWT Auth                   | [2.1][mp-jwt-auth-spec]           |
| MicroProfile Long-Running Actions (LRA) | [2.0][mp-lra-spec]                |
| MicroProfile Metrics                    | [5.1.1][mp-metrics-spec]          |
| MicroProfile Open API                   | [3.1.1][mp-openapi-spec]          |
| MicroProfile OpenTracing                | [3.0][mp-opentracing-spec]        |
| MicroProfile Reactive Messaging         | [3.0][mp-reactive-messaging-spec] |
| MicroProfile Reactive Streams Operators | [3.0][mp-reactive-stream-spec]    |
| MicroProfile REST Client                | [3.0][mp-rest-client-spec]        |

# Other Components

| Component                        | Description                                                                  |
|----------------------------------|------------------------------------------------------------------------------|
| [CORS](cors/cors.md)             | Cross Origin Resource Sharing                                                |
| [gRPC](grpc/server.md)           | gRPC server and client                                                       |
| [OCI SDK](integrations/oci.md)   | Full set of APIs for working with OCI services                               |
| [Scheduling](scheduling.md)      | Scheduling functionality based on [Cron-utils][cron-utils]                   |
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
