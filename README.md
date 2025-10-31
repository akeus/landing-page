# Miguel Ake Landing

My personal page, all information that appears there, is on my LinkedIn.

## Local development

Install dependencies

```shell
npm install
```

Run app

```shell
ng serve -o
```

## Publish docker image

### Build image

First, we need to enable **Build Kit**, to do this we must go to `Config > Docker Engine` and add the following code.

```json
{
  "features": {
    "buildkit": true
  }
}
```

Run `docker build` with npm token for install dependencies

```shell
docker build 
  --secret id=npm_token,src=<./path/file/with/secret.txt> 
  --tag ghcr.io/akeus/landing-page:<version> .
```

### Publish image

First, we need to add GitHub Registry in Docker, to do this we have to log in with our credentials.

```
docker login ghcr.io -u akeus --password <secret>
```

Send to registry

```shell
docker push ghcr.io/akeus/landing-page:<version>
```
