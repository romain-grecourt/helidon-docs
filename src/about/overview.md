# Helidon Overview

Helidon is a collection of Java libraries for writing microservices. Helidon is open source under the Apache License, Version 2.0.

Helidon microservices are based on the Helidon WebServer and run as a stand-alone Java application in their own JVM. This is similar to a number of other Java microservices frameworks. So what makes Helidon different?

- **Helidon WebServer**: a minimal dependency, highly concurrent server designed and implemented from the ground up using Java virtual threads. 
- **Blocking Allowed and Encouraged**: the performance of reactive programming with the simplicity of blocking APIs. All thanks to virtual threads.
- **JDK alignment**: the Helidon project works closely with the JDK team to get the most out of the latest JDK features.
- **API Choice**: Helidon SE, a low level imperative API and Helidon MP for those that prefer Jakarta EE APIs.

## Major Components

Helidon has dozens of components, but here are some key areas:

* **WebServer**: a highly concurrent server supporting HTTP/1, HTTP/2, gRPC, JSON-RPC and SSE. Extensible media handling with built-in support for JSON (Jackson, JSON-P, JSON-B), GSON and multi-part.
* **WebClient**: a highly concurrent client with protocol and media support consistent with WebServer.
* **AI**: integration with LangChain4J and full MCP support.
* **Observability**: metrics, tracing, health.
* **MicroProfile**: optional support for MicroProfile APIs for those that prefer the Jakarta EE programming model.
* **Persistence**: lean DBClient, full JPA/JTA (MicroProfile), or new Helidon Data (MicroProfile)
* **GraalVM native-image support**: build a native executable from your Java application.

## Get Started

You can have your first Helidon server up and running in under a minute. See [Getting Started](./get-started.md).

## Stay in Touch

|||
| ------------- | ------------- |
| Code   | [GitHub](https://github.com/helidon-io/helidon) |
| Issues | [GitHub issue tracker](https://github.com/helidon-io/helidon/issues) |
| **Ask Questions:** |
| Slack |  [\#helidon-user](http://slack.helidon.io) |
| Stack Overflow | [helidon](https://stackoverflow.com/questions/tagged/helidon) |
| FAQ | [Helidon FAQ](https://github.com/oracle/helidon/wiki/FAQ) |
| **Follow Us:** |
| Twitter | [@helidon_project](https://twitter.com/helidon_project) |
| Blog | [Helidon on Medium](https://medium.com/helidon) |
| YouTube | [Helidon](https://youtube.helidon.io) |

## Helidon SE and MP

Helidon comes in two flavors: **Helidon SE** and **Helidon MP**. Think
about these as frameworks providing similar functionality but
offering different developer experiences.

| **Helidon SE**                                                                                                                                                                                                                                  | **Helidon MP**                                                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gives you full transparency and puts you in control.                                                                                                                                                                                            | Built on top of the Helidon SE libraries and provides a platform that is familiar to enterprise Java developers.                                      |
| Microframework model with a very small footprint and limited functionality (~7 MB).                                                                                                                                                             | [MicroProfile](https://projects.eclipse.org/proposals/eclipse-microprofile) implementation; slightly larger footprint than SE (~13 MB).               |
| Helidon SE is Helidon’s foundational set of APIs. As of Helidon 4, virtual threads have enabled these APIs to change from asynchronous to blocking. This results in much simpler code that is easier to write, maintain, debug and understand.. | Declarative style with dependency injection.                                                                                                          |
| Transparent "no magic" development experience; pure java application development with no annotations and no dependency injections.                                                                                                              | Developer experience similar to that of Spring Boot, Jakarta EE and MicroProfile; layers on some Jakarta EE components (CDI, JAX-RS, JSON-P, JSON-B). |
| Learn more about [Helidon SE](../se/README.md).                                                                                                                                                                                           | Learn more about [Helidon MP](../mp/README.md).                                                                                                 |

To help illustrate the differences, below are two samples implementing a
simple RESTful service. One uses Helidon SE, the other Helidon MP.

Helidon SE sample:
```java
WebServer.builder()
        .addRouting(HttpRouting.builder()
                            .get("/greet", (req, res)
                                    -> res.send("Hello World!")))
        .build()
        .start();
```

Helidon MP sample:
```java
@Path("hello")
public class HelloWorld {
    @GET
    public String hello() {
        return "Hello World";
    }
}
```

Even though Helidon MP supports Jakarta EE APIs it does not require an
application server. Helidon MP applications are stand-alone Java
applications running in their own JVM powered by Helidon WebServer.

### What flavor shall I use?

Use Helidon SE if

- Performance is your main goal.

- Your application is heavily using concurrency.

- You are not planning to use any CDI-based components.

- You want to use a minimum number of third-party dependencies.

Use Helidon MP if

- You want to base your application on modern enterprise Java standards
  such as Jakarta EE and MicroProfile.

- You are familiar with Java EE, Jakarta EE or Spring Boot and would
  like to have a similar development experience.

- You are migrating existing Java EE/Jakarta EE application to
  microservices.

- You are planning to use CDI components or extensions.

- You are planning to use JPA for data access and Jersey (JAX-RS) for
  RESTful services.

## History 


| Release       | Initial Release Date | Base JDK | MicroProfile | Jakarta EE | Service Life |
| ------------- | ------------- | ----------- | ------------ | ---------- | ------------ |
| Helidon&nbsp;4 | 23-Oct-2023   |   21        |     6.1      |    10      |   Active     |
| Helidon 3     | 26-Jul-2022   |   17        |     5.0      |     9      | Maintenance  |
| Helidon 2     | 24-Jun-2020   |   11        |     3.3      |     8      |     EOSL     |
| Helidon 1     | 14-Feb-2019   |    8        |     3.2      |  Java EE 8 |     EOSL     |

* Active: under active feature development.
* Maintenance: bug fixes and dependency upgrades only.
* EOSL: End of Service Life. No planned releases, but the project may do a release at its discretion.

Active Helidon releases will always support the latest JDK release.

Prior to Helidon 4, the Helidon WebServer was based on Netty. As of Helidon 4 it is a ground up rewrite designed for and implemented using virtual threads.

## Upgrading

To upgrade your current version of Helidon, follow the `Upgrade Guides`:

To upgrade from Helidon 3.x to 4.x:

- [Helidon SE 4x Upgrade Guide](../se/guides/upgrade_4x.md)
- [Helidon MP 4x Upgrade Guide](../mp/guides/upgrade_4x.md)

To upgrade from Helidon 2.x to 3.x:

- [Helidon SE 3x Upgrade Guide](../se/guides/upgrade_3x.md)
- [Helidon MP 3x Upgrade Guide](../mp/guides/upgrade_3x.md)

To upgrade from Helidon 1.x to 2.x:

- [Helidon SE 2x Upgrade Guide](../se/guides/upgrade.md)
- [Helidon MP 2x Upgrade Guide](../mp/guides/upgrade.md)
