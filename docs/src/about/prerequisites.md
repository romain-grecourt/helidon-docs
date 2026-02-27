# Prerequisites

|                                                                            |                                                                                                                                                     |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [JavaSE 21+](https://www.oracle.com/technetwork/java/javase/downloads)     | Helidon requires Java 21+ (25+ recommended).                                                                                                        |
| [Maven 3.8+](https://maven.apache.org/download.cgi)                        | Helidon requires Maven 3.8+.                                                                                                                        |
| [Docker 18.09+](https://docs.docker.com/install/)                          | If you want to build and run Docker containers.                                                                                                     |
| [Kubectl 1.16.5+](https://kubernetes.io/docs/tasks/tools/install-kubectl/) | If you want to deploy to Kubernetes, you need `kubectl` and a Kubernetes cluster (you can [install one on your desktop](../../about/kubernetes.md). |

Verify Prerequisites:
```shell
java -version
mvn --version
docker --version
kubectl version
```

Setting `JAVA_HOME`:
```shell
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-25
```

## Helidon CLI

If you want to use the Helidon CLI for creating and building projects please see [Helidon CLI](cli.md).

## Windows

Windows 10 or newer is required.

If you want to use the [Helidon CLI](cli.md) you’ll also need to install the Visual C++ Redistributable Runtime:
- [x64](https://aka.ms/vs/16/release/vc_redist.x64.exe)
- [x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)

We also recommend installing the following from the Microsoft Store:

- PowerShell
- Windows Terminal

This document assumes you will be using PowerShell.
