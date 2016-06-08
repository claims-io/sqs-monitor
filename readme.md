# Sqs Monitor

> Monitor sqs queue(s) and notify slack if number of messages does not decrease


## Getting Started

#### Docker

```
docker run it claims-io/sqs-monitor
```

#### Environment Variables

Please provide the following ENV vars when running or create a .env file on root.

- AWS_KEY_ID
- AWS_KEY_SECRET
- AWS_QUEUE_NAME
- AWS_QUEUE_URL
- AWS_QUEUE_REGION
- SLACK_HOOK


## Contributing

#### Guide

Refer to the [contributors guide](CONTRIBUTING.md) for more details on editor setup, issues and standards.

#### Structure

The repository has the following folders:

- `server` - The source for the monitor
- `script` - Contains helper scripts (see below)

#### Scripts

The below helper scripts are available for convenience:

- `script/build` - build the application
- `script/package` - packages the app as a docker container (must be run after `script/build`)
