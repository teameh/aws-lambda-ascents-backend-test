# ascents-backend

## Requirements

* AWS CLI already configured with Administrator permission
* NodeJS 8.10+ installed
* Docker installed
* Make sure `~/.aws/credentials` is set up: 

```
[default]
aws_access_key_id = XXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX
```

## Local development

Open 2 terminals: 

1 - watch and build the lambda:

```bash
$ yarn start
```

2 - Emulation of Api gateway:

```bash
$ yarn run server
```

Both need to keep running while developing. The server will auto-reload but it does not *auto-rebuild* so you need the watcher!

## Packaging and deployment

```bash
yarn deploy
```

## Testing

run the following in one of the lambda folders:

```bash
yarn;
yarn test
```
