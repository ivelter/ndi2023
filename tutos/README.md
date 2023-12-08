# Tuto pour la NDI

## Compiler

Pour compiler il vous faut [typst](https://github.com/typst/typst), puis il faut effectuer une fois installé:

```sh
typst c tuto.typ
```

## Docker

Compiler l'image comme ceci:

```sh
docker buildx build . -t tuto-ndi2023
```

Puis lancer le avec un volume

```sh
docker run -it -v `pwd`:/app tuto-ndi2023
```

## Config

Voir `config.json`.
