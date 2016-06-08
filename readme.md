# Sqs Monitor
> Monitor sqs queue(s) and notify slack if number of messages does not decrease


## Getting Started

The repository has the following folders:

- `server` - The source for the monitor
- `script` - Contains helper scripts (see below)

### Scripts

The below helper scripts are available for convenience:

- `script/build` - build the application
- `script/package` - packages the app as a docker container (must be run after `script/build`)

### Contiributors

Refer to the [contributors guide](CONTRIBUTING.md) for more details on editor setup, issues and standards.

## Docker

The API runs within a Docker container, to create the container
for publishing, first build the application, then package it.