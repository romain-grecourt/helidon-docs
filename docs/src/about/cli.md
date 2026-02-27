# Helidon CLI

The Helidon CLI lets you easily create a Helidon project by picking from
a set of archetypes. It also supports a developer loop that performs
continuous compilation and application restart, so you can easily
iterate over source code changes.

The CLI is distributed as a standalone executable (compiled using
GraalVM) for ease of installation. It is currently available as a
download for Linux, Mac and Windows. Simply download the binary, install
it at a location accessible from your PATH, and you’re ready to go.

## Prerequisites

Please see [Helidon Prerequisites](../../about/prerequisites.md).

## Installation

macOS:
```shell
curl -L -O https://helidon.io/cli/latest/darwin/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/
```

If you get a warning that "the developer cannot be verified" when
running the CLI this is due to the Helidon CLI not being signed and
notarized yet. You can disable this check by running:
`xattr -d com.apple.quarantine helidon`

Linux:
```shell
curl -L -O https://helidon.io/cli/latest/linux/helidon
chmod +x ./helidon
sudo mv ./helidon /usr/local/bin/
```

Windows:
```powershell
PowerShell -Command Invoke-WebRequest -Uri "https://helidon.io/cli/latest/windows/helidon.exe" -OutFile "C:\Windows\system32\helidon.exe"
```

For Windows, you will also need the Visual C++ Redistributable Runtime.
See [Helidon on Windows](windows.md) for more information.

Verify CLI installation:
```shell
helidon version
```

## Create a New Project

```shell
helidon init
```

Then answer the questions.

## Developer Loop

```shell
cd myproject
helidon dev
```

As you make source code changes the project will automatically recompile
and restart your application.

## Demo

<figure>
<img src="../images/cli-demo.gif" alt="CLI Demo" />
</figure>
