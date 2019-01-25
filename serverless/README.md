# ascents-backend

## Requirements

* AWS CLI already configured with Administrator permission
* NodeJS 8.10+ installed
* Make sure `~/.aws/credentials` is set up: 

```
[default]
aws_access_key_id = XXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXX
```

## Local development

Watch and build the lambda + emulation of Api gateway:

```bash
$ yarn start
```

## Packaging and deployment

```bash
yarn deploy
```

## Testing

run the following in one of the lambda folders:

```bash
yarn
yarn test
```
