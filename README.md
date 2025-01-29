<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar proyecto
2. Instalar dependencias

```bash
$ pnpm install
```

3. Copiar el .env.template a .env

```bash
$ cp .env.template .env
```

4. Configurar las variables de entorno

5. Levantar la base de datos

```bash
$ docker compose up -d
```

6. Ejecutar SEED

```
http://localhost:3000/api/seed
```

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
