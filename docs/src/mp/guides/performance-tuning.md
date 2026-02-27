# Introduction

In this guide you fill find basic advice for performance tuning of your
Helidon application. Most of this concerns tuning Helidon WebServer, but
you should also consider configuring/tuning Java heap size as per any
Java application.

# Use Helidon Microprofile Core Bundle

Use `io.helidon.microprofile.bundles:helidon-microprofile-core` instead of `io.helidon.microprofile.bundles:helidon-microprofile`
and add only what you use.

For example:
```xml
<dependency>
    <groupId>io.helidon.microprofile.bundles</groupId>
    <artifactId>helidon-microprofile-core</artifactId>
</dependency>
<dependency>
    <groupId>io.helidon.microprofile.metrics</groupId>
    <artifactId>helidon-microprofile-metrics</artifactId>
</dependency>
<dependency>
    <groupId>io.helidon.microprofile.health</groupId>
    <artifactId>helidon-microprofile-health</artifactId>
</dependency>
```

# WebServer Tuning

Helidon WebServer is in large part self tuning. It uses default values
that will satisfy most use cases, and with the adoption of Java virtual
threads there is no longer a need to tune pools of platform threads.
Still, there might be cases where you wish to change configuration
options from their default values.

For details on the following options please see:

- [WebServer Configuration](../../se/webserver/webserver.md#configuration-options)
- [WebServer Socket Configuration](../../config/io_helidon_common_socket_SocketOptions.md)

# Summary of Tuning Options

The following `application.yaml` snippet shows some configuration
options that can be used to tune your application. It is intended to
show configuration options in context. Please make sure you understand
these options before using them. See the documentation referenced above.

```yaml
server:
  # These are used to prevent unbounded resource consumption of the server
  idle-connection-period: PT2M  # Check idle connections every 2 minutes
  idle-connection-timeout: PT5M # Close connections that have been idle for 5 minutes
  max-concurrent-requests: -1   # Maximum number of concurrent requests. -1 is unlimited.
  max-tcp-connections: -1       # Max number of concurrent tcp connections. -1 is unlimited.
  max-in-memory-entity: 131072  # Entities smaller than this are buffered in memory vs streamed (bytes)
  max-payload-size: -1          # Reject requests with payload sizes greater than this. -1 is unlimited (bytes)

  # Depends on the workload and kernel version
  backlog: 1024
  write-buffer-size: 4096
  write-queue-length: 0 # 0 means direct write

  connection-options:
    # 0 means indefinite (and less clutter on socket impl)
    read-timeout: PT0S
    connect-timeout: PT0S

    # Default (false: Nagle's algorithm enabled) is best for most cases. But for some OS and
    # workloads enabling TCP_NODELAY (disable Nagle's algorithm) can improve performance.
    tcp-no-delay: false

    # The default is TCP auto-tuning which is best for most cases.
    socket-send-buffer-size: 32768
    socket-receive-buffer-size: 32768

  # Protocol validation.
  # Careful with this! Can be dangerous if you turn these off.
  protocols:
    "http_1_1":
      validate-request-headers: true
      validate-response-headers: false
      validate-path: true
      recv-log: true
      send-log: true
```
