# Prismate

> Just a quick simple boilerplate for prisma2 & apollo-server. Still very WIP

### Quickstart

Install [Prisma 2 CLI](https://github.com/prisma/prisma2-docs/blob/master/prisma-2-cli.md):

```bash
# Using npm
npm install -g prisma2

# Using yarn
yarn global add prisma2
```

Set up the database:

```bash
docker-compose up -d
```

```bash
prisma2 lift save --name 'start'
prisma2 lift up
```

Install the dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn
```

It will run prisma2 generate on postinstall.

Start the GraphQL server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```
