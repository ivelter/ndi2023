
# NDI édition 2023

Le projet de la `CoopTeam` pour l'édition 2023 de la [Nuit De l'Info](https://www.nuitdelinfo.com/)!

## Auteurs

Les magnifiques membres de la `CoopTeam`

- Ilan VELTER
- Thomas QUEMIN 
- Alexis BASTIDE 
- Eliott BASSIER
- Maévann POUPON 
- Antonin CHABAUD-PECH
- Théo DUBERNET

## Défis réalisés

Les défis réalisés sont: 
- [Le défi principal](https://www.nuitdelinfo.com/inscription/defis/174) (pour lancer, voir suite)
- [Easter eggs par Code Troopers](https://www.nuitdelinfo.com/inscription/defis/328)
  - ici mettre instructions selon modalités de rendu
- [UX/UI cauchemardesque par RedLab](https://www.nuitdelinfo.com/inscription/defis/396)
  - pareil
- [MOVAI CODE par Coddity](https://www.nuitdelinfo.com/inscription/defis/410)
  - pareil
- [Jeu de rythme par Rhythm Freaks](https://www.nuitdelinfo.com/inscription/defis/413)
  - pareil
- [Retroverse Pipeline par l'Ecole Polytechnique de Sousse](https://www.nuitdelinfo.com/inscription/defis/421)
  - pareil     

## Fonctionnalités
- Une page d'accueil "slides" qui résume la problématique
- Deux autres pages qui approfondissent la problématique des fake news et de la lutte contre le changement climatique à son échelle
- Un jeu de rythme sur le thème du climat (voir défis)
  - Présenter et comment y accéder ici
- Des easter eggs:
  - Les lister ici
- Une fonction mal écrite:
  - La décrire ici
- Des pipelines de CI/CD, et entre autre une pipeline Docker
  - Décrire + lien dockerHub ici

## Lien d'accès

Mettre ici une fois qu'il sera upload

## Détails sur l'installation en local

Pour installer le projet, il y a deux façon :
- Soit par [docker](https://www.docker.com/)
- Soit manuellement

Docker permet directement de le build et de l'exposer directement sur le web à l'aide [nginx](https://www.nginx.com/).

### Par docker

Pour pouvoir build avec docker, il vous faut [docker](https://docs.docker.com/get-docker/) dans un premier temps. Téléchargez ensuite le projet. Puis lancez un terminal dans le répétoire du projet puis executez cette commande:

```sh
docker buildx build . -t ndi2023-Coopteam
```

À partir de là, il manque plus qu'à lancer le container.

```sh 
docker run -p 3000:80 -it ndi2023-Coopteam
```

Votre serveur est en ligne !

Pour changer toute configuration, vous devez changer les fichiers qui se trouve dans `nginx`.

### Manuellement

Pour pouvoir build / utiliser le projet, je vous recommande de voir le [tuto](https://github.com/ivelter/ndi2023/blob/setup/tutos/out/noir%26blanc.pdf), chapitre `II.3`, `II.5` à `II.6` et chapitre `V`. 

Je vais rapidement passer dessus.

Téléchargez [NodeJS](https://nodejs.org/en). Ensuite, téléchargez le projet. Rentrez dans le répétoire du projet puis à partir de là, lancez un terminal et rentrez cette commande:

```sh 
npm ci
```

À partir de là, vous avez deux commandes possibles, soit pour build, soit pour développer.

#### Build

Pour build le projet, lancez toujours dans un terminal cette commande:

```sh
npm run build
```

Un dossier se nommant `out` s'est maintenant créé et vous pouvez l'host comme vous le voulez.

#### Développer

Pour modifier le projet et avoir en temps réel le résultat, vous devez executer cette commande:

```sh
npm run dev
```

Un message devrait s'afficher avec une URL pour se rendre sur le site.


## Technologies employées

- [NodeJS](https://nodejs.org/en): `JavaScript runtime environment` orienté serveur majoritairement
- [ReactJS](https://fr.legacy.reactjs.org/): Une bibliothèque JavaScript pour créer des interfaces utilisateurs
- [NextJS](https://nextjs.org/): Un framework full-stack pour créer des applications orienté web
- [SASS](https://sass-lang.com/): Un framework css qui permet la simplication de l'écriture du css
- [Tailwindcss](https://tailwindcss.com/): Un framework css qui permet d'utiliser des classes prédéfinies pour une écrire beaucoup plus rapide 

### Optionnel
- [Docker](https://www.docker.com/): Plateforme permettant de lancer certaines applications dans des conteneurs. Augmente la portabilité du code
- [Nginx](https://www.nginx.com/): Serveur web permettant d'exposer son site web.

## Tuto

Un gros tuto est proposé dans le dossier [`tutos`](https://github.com/ivelter/ndi2023/blob/main/tutos). N'hésitez pas à le voir pour plus de renseignement quant à son installation.
