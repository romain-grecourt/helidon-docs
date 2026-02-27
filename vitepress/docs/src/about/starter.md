# Helidon Starter

The [Helidon Starter](https://helidon.io/starter) provides a friendly way to create a new Helidon project.
After selecting whether you want a Helidon SE or MP project you choose an application type.

## Choose an Application Type

Helidon provides the following set of archetypes to bootstrap your
application development journey.

### QuickStart

This option creates a Helidon project that includes multiple REST
operations along with default observability setup and a set of
dependencies to enable ease of development e.g. in case of Helidon MP,
it uses `helidon-microprofile` bundle instead of minimal
`helidon-microprofile-core` bundle.

### Database

This option builds on `QuickStart` to demonstrate how to integrate with
database (in-memory H2, by default). In case of, Helidon SE that uses
the DbClient API while for Helidon MP that uses JPA.

### Custom

This option enables user to create Helidon project of their choice,
suitable to start from scratch i.e. bare minimum, if default values are
chosen Or choose from many options available.

### OCI (MP Only)

This option builds on `QuickStart` to demonstrate integration with
Oracle Cloud Infrastructure (OCI) services using the OCI SDK. Generated
project showcases OpenApi-driven development approach where the practice
of designing and building APIs is done first, then creating the rest of
an application around them is implemented next. This is available for
Helidon MP only.

## Additional Options

You will then have additional options you can choose from to configure your project.

# Download the Project Files

Click **Download** and Project Starter generates the files in a
directory named after the `artifactId` value. It mainly contains the
following:

- Maven project structure
- skeletal application code
- associated unit test code
- example Dockerfile files
- application configuration file(s)
- Readme file with instructions to build and run application/test

See the README in the generated project for additional instructions.