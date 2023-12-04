#import "./template.typ": * // Templace faite maison
#set text(font: "Fira Code")

#let config = json("./config.json");

#show: doc => project(
  name: "Tuto NDI",
  description: [Un document récapitulant tout ce que vous devez savoir pour pouvoir travailler
    le jour de la NDI],
  cols: config.colonnes,
  doc,
  black: config.color == "noir&blanc",
  dark: config.color == "sombre",
)

#let separateur = align(center, line(length: 80%))

// Si quelqu'un connait une meilleure façon pour les regex

#show regex("[Gg][Ii][Tt]"): doc => link("https://git-scm.com/", doc)
#show regex("[Dd][Oo][Cc][Kk][Ee][Rr]"): doc => link("https://docs.docker.com/", doc)
#show regex("[Nn][Oo][Dd][Ee]\.?[Jj]?[Ss]?"): doc => link("https://nodejs.org/en", doc)
#show regex("[Nn][Ee][Xx][Tt]\.?[Jj]?[Ss]?"): doc => link("https://nextjs.org/", doc)
#show regex("tailwindc?s?s?"): doc => link("https://tailwindcss.com/", doc)
#show regex("[Ss][CcAa][Ss][Ss]"): doc => link("https://sass-lang.com/", doc)
#show regex("[Gg][Ii][Tt][Hh][Uu][Bb]"): doc => link("https://github.com/", doc)

= Notes
Toutes les libs, logiciels et langages qui seront nommés dans ce tuto auront
*automatiquement un lien vers son site web respectif*. Exemple GIT.

Vous pourrez continuer à suivre *sans devoir remontrer tout en haut du tuto*.

À noter aussi que le mot `terminal` sur linux *est équivalent* à `Git bash` sur
Windows. Vous le verrez plus tard quand git sera installé

3 versions existent de ce document, une en noir et blanc classique, une autre
(celle ci) dans un thème clair mais pas blanc, et un dernier dans un thème plus
sombre

Ce tuto est réalisé avec le font #link("https://fonts.google.com/specimen/Fira+Code", [`Fira Code`]) et
avec l'outil nommé #link("https://typst.app/")[Typst].

#separateur

Dans un code, quand vous voyez `<QuelqueChose>` vous devez *absolument
remplacer* `<QuelqueChose>` par quelque chose. Il est _très_ souvent expliqué
soit par le nom à *l'intérieur* soit par le *contexte*.

Exemple: ```sh
echo "<EMAIL>" > bdd.csv
``` se transforme en ```sh
echo "jean@michel.com" > bdd.csv
```

La même chose avec les `[Truc]` sauf que vous pouvez très bien ne rien mettre.

#separateur

Les 4 versions majeures qui seront traitées dans ce tuto sont:
- _Windows sans WSL_
- _Ubuntu/Debian/WSL_
- _Fedora_
- _Arch Linux_

Pour toute demande particulière ou fautes d'orthographes éventuelles, contactez
moi par ce #link("mailto:thumus@tuta.io", [mail]).

#colbreak()
= Installation du projet
Pour pouvoir programmer sur le projet, il faudra vous munir de plusieurs
logiciels tel que:
+ Git
+ NodeJS

Le reste sera automatiquement installé grâce à ces logiciels

== Git
Première chose à avoir pour pouvoir travailler sur le projet est Git. Pour faire
court, ça permet de travailler à plusieurs sur un projet sans se partager les
fichiers et galérer comme des cons.

=== Windows sans WSL

Pour installer git sous windows, il suffit d'ailleurs sur cette #link("https://git-scm.com/download/win")[page] puis
de prendre la version `Standalone Installer`. Principalement pendant son
installation il suffit de presser le bouton `suivant` en boucle.

À moins que vous vouliez des options particulières, vous avez fini
l'installation basique de git.

=== Ubuntu/Debian/WSL

Beaucoup plus simple que Windows, il suffit d'effectuer cette commande dans un
terminal:

```bash
sudo apt install git
```

À noter que le `sudo` n'est pas forcément obligatoire pour votre système, cela
dépend énormément du setup de votre système. Fin de l'installation.

=== Fedora

Très similaire à Debian, il suffit d'effecturer cette commande dans un terminal:

```bash
sudo dnf install git
```

À noter que le `sudo` n'est pas forcément obligatoire pour votre système, cela
dépend énormément du setup de votre système. Fin de l'installation.

=== Arch Linux

Toujours aussi similaire, il suffit d'effectuer cette commande dans un terminal:

```sh
sudo pacman -S git
```

À noter que le `sudo` n'est pas forcément obligatoire pour votre système, cela
dépend énormément du setup de votre système. Fin de l'installation.

== L'après Git

Une fois git installé, rendez vous sur un terminal. Vous aurez besoin de
spécifier votre adresse mail et votre nom (vous pouvez très bien mettre un
pseudo et une fausse email si vous le souhaitez).

Les commandes sont donc:

#[
  #set text(size: 10pt);
  ```sh
        git config --global user.email "<EMAIL>"
        git config --global user.name "<NOM>"
      ```
]

Cela vous permettra de faire des `commits`. On reviendra sur le terme plus tard.

== NodeJS

Maintenant que git est setup, nous allons avoir besoin du protagoniste de ce
projet, NodeJS. C'est le logiciel qui permet de faire du javascript sans devoir
lancer un navigateur. C'est la version local du JS.

Il existe deux possibilités pour installer Node, soit directement par votre
package manager (ou par lien direct avec windows), soit par #link("https://volta.sh")[Volta.sh],
qui installe un gestionnaire de version de node et de ses outils. Je vous
conseille cette manière en général mais les deux tutos vous seront proposé.

=== Méthode une, sans Volta.sh

==== Windows sans WSL
Très simple (pour une fois), il suffit d'aller sur la page de NodeJS puis de
cliquer la version LTS. Au moment où j'écris le tuto c'est la `20.10.0`.

Ensuite exécuter l'installeur comme un installeur classique.

==== Debian/Ubuntu/WSL
#let long(r) = {
  codly(width-numbers: none)
  r
  codly(width-numbers: 2em)
}
Beaucoup plus complexe, nous allons voir comment faire.

Premièrement, lancez ces commandes:

#long(```sh
sudo apt-get update
sudo apt-get install -y \
ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
| sudo gpg --dearmor -o \
/etc/apt/keyrings/nodesource.gpg
```)
Cette commande permet de télécharger les clefs nécessaires pour pouvoir
télécharger NodeJS

Les backslashs (`\`) sont là pour mettre sur plusieurs lignes. C'est seulement
décoratif dans ce cas précis.

Ensuite, il faut executer cette commande:
#long(
  ```sh
      NODE_MAJOR=20
      echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
      ```,
)
\ \ \ // hacky hacky, faut attendre codly@0.2.0

Cette commande permet de rajouter NodeJS à la liste des paquets téléchargeable
de votre pc.

Et enfin pour finir, exécutez ces commandes

```sh
sudo apt-get update
sudo apt-get install nodejs -y
```

Cette commande parle d'elle même, elle installe nodejs.

==== Fedora

C'est beaucoup plus simple que Debian. Il suffit d'effectuer cette commande:

```sh
dnf module install nodejs:20/common
```

==== Arch Linux

NodeJS sur Arch arrive toujours avec la dernière version, ce qui rend difficile
le contrôle de version. Je vais donc utiliser une autre méthode pour
l'installation, veuillez donc passer à la méthode 2 avec l'installation de volta
qui sera beaucoup plus intéressant que d'installer une seule version.

=== Méthode 2, Volta.sh (Recommandé)

Nous allons nous baser sur #link("https://volta.sh/")[Volta.sh], un gestionnaire
de version de nodejs et de ses outils. La procédure reste très simple.

==== Windows
Malheureusement pour les utilisateur de windows, je ne *conseille* par de faire
ce tuto. Cela est légèrement plus compliqué pour vous que pour les utilisateurs
sous Unix mais si vous le souhaitez, je vous met à disposition #link(
  "https://docs.volta.sh/guide/getting-started",
)[le lien direct vers la page pour installer sous windows]. Il suffit de
télécharger l'installer puis grâce au lien direct depuis la page, de mettre
votre pc sous le mode `Developper`. Si vous l'avez déjà fait, libre à vous
d'installer volta.

==== Pour tous les autres

Il suffit simplement de faire cette commande pour installer volta:

```sh
curl https://get.volta.sh | bash
```

Je vous recommande de relancer votre terminal après cette commande.

Puis pour installer node:

```sh
volta install node@20 npm@latest
```
NPM est le package manager pour toutes les librairies externe de node, un peu
comme `pip` pour python. Nous en auront besoin quand nous installerons le site
web

== Configurer git avec github

=== Générer une clef ssh
Nous allons commencer par générer une clef SSH qui vous suivra probablement très
longtemps. Dans un premier temps, ouvrez votre terminal (Git bash pour windows)
et tapez

```sh
ssh-keygen -t ed25519 -C "<EMAIL>"
```

L'email sera visible pour tout le monde, choisissez bien.

Ce message apparaitra `Enter a file in which to save the key`. Appuyez juste sur
la touche entrée.

Quand vous êtes devant ce message `Enter passphrase (empty for no passphrase)`,
soit vous choissiez de mettre un mot de passe ce qui est très utile sur les pc
qui ne sont pas à vous mais très chiant car il faut retaper le mot de passe pour
chaque action avec gitub, soit vous ne mettez rien.

Votre clef SSH est maintenant générée

=== Ajouter votre clef ssh
Après l'avoir générée, il faut bien sûr l'ajouter à votre gestionnaire de clef
ssh

==== Windows
Dans un terminal *PowerShell avec les permissions élevés*, tapez:

#{
  set text(size: 10pt)
  long(```sh
                Set-Service ssh-agent -StartupType Automatic
                ```)
}

Puis tapez cette commande en changeant bien le nom par le votre:

#long(```sh
ssh-add /c/Users/<NAME>/.ssh/id_ed25519
```)

==== Autres systèmes

Dans un terminal, tapez:

```sh
eval "$(ssh-agent -s)"
```
Vous aurez un message qui apparaitra.

puis ensuite, tapez: ```sh
ssh-add ~/.ssh/id_ed25519
```

Si vous voulez que cette tâche soit automatique, ajoutez ces 2 commandes à la
fin de votre fichier `~/.bashrc`.

Cela vous évitera de devoir refaire ces commandes.

=== Ajouter votre clef ssh à github

Maitenant, allons sur github.

Quand vous êtes connecté, cliquez sur votre icone tout en haut à droite. Vous
aurez un menu équivalent à ceci qui apparaitra #image("./img/1.png")
Cliquez sur `Settings`. À partir de là, vous aurez sur la droite un menu comme
ceci: #image("./img/2.png")
Cliquez sur `SSH and GPG keys`.

Vous aurez un bouton `New SSH key` en haut à droite, cliquez dessus.

Appliquez un titre à votre clef ssh pour savoir sur quel pc elle est par
exemple.

*Windows*: Ensuite, pour les pcs sous windows, il faut que vous alliez dans
votre dossier utilisateur, puis que vous cherchiez votre dossier `.ssh` et que
vous copiez le contenu du fichier `id_ed25519.pub`.

*Autres*: Pour tous les autres systèmes, il faut faire cette commande:

```sh
cat ~/.ssh/id_ed25519.pub
```

Un texte apparaitra, vous devez le copiez.

#separateur

À partir de là il manque plus qu'à coller ce que vous avez copié dans le champ
`Key` sur github.

Confirmer la création et ce sera parfait !

== Télécharger le projet
Maintenant que le plus gros est fait, il manque plus qu'à télécharger le projet
et les librairies.

Dans un premier temps, choissiez un dossier où mettre votre projet. Un exemple,
votre dossier document.

Ensuite, ouvrez un terminal dessus et tapez cette commande:
#{
  set text(size: 10pt)
  long(```sh
            git clone git@github.com:ivelter/ndi2023.git
            ```)
}

Cette commande va automatiquement télécharger le projet avec git initialisé.
Cela vous évites de l'initialiser puis de relier le remote avec etc etc...

Il manque plus qu'à rentrer dans le projet! Il faut faire :

```sh
cd ndi2023
```
Et le tour est joué !

== Installer les libs et le projet

Si tout s'est bien passé, vous êtes actuellement dans le dossier du projet. Git
étant initialisé, il manque plus qu'à installer les libs!

Dans un terminal donnant accès directement au projet, il faut faire:

```sh
npm i
```

Cela va installer toutes les libs ! Le projet est maintenant setup et vous
pouvez commencer à travailler dessus !
#colbreak()
#colbreak()
= Programmer le projet

Maintenant qu'on a vu comment installer le projet, il faut maintenant comprendre
comment fonctionne le projet !

== Les librairies

Nous utilisons ces libraries suivantes:

/ Nextjs: Un vrai framework qui se base sur React et qui propose un système de route
  intéressante. Moins intéréssant pour les SPA (*S*\ingle-*P*\age *A*\pplication)
  mais une fois que tu as compris la base, c'est simple.

/ #link("https://tailwindcss.com/", [Tailwindcss]): Un framework CSS équivalent à bootstrap pour optimiser notre temps quand nous
  designerons le site. Marche principalement par class.

/ #link("https://sass-lang.com/", [Sass]): Sass est une version de css sous stéroides; permet d'éviter la redondance,
  permet de nest des classes et permet même de créer des fonctions (c'est
  excellent) . Nous utiliserons la version `SCSS` pour plus de simplicité.

== La structure du projet
Nous allons donc voir dans un second temps comment est structuré le projet en
commençant par le haut.

=== .github/workflows/

Ces fichiers à l'intérieurs permettent d'indiquer à github de lancer des
commandes directement sur github pour savoir si notre projet se lance bien,
compile bien, est bien aligné avec nos principes de code...

Il y a très peu de chances que vous ayez besoin de changer quelque chose ici.

=== .next/
Ce dossier n'est pas forcément visible pour vous (pour l'instant) mais ce sont
les artéfacts et le code généré par nextJS, la librairie principale pour notre
site web.

=== out/
La même chose que .next mais il contiendra notre code compilé et exporté en
html, css et js.

=== public/
Public est un dossier vide (pour le moment). Il contiendra tout ce qui concerne
du code *static* tel que le favicon par exemple. Ce sont des données externes au
site lui même mais important !

=== src/app/
Le protagoniste ! Ce dossier contient l'ensemble du code modifiable. Il permet
de faire vivre le site web lui même. Il y a plusieurs fichiers importants à
regarder à l'intérieur.

==== src/app/page.js

Pour qu'on puisse avoir une page qui s'affiche, nous devons toujours créer un
fichier `page.js` à l'intérieur de nos dossiers.

Ces fichiers permettent de faire la page elle même. À ne pas confondre avec le
`Layout`, cela permet de mettre du contenu principalement. On utilisera avec des
fichiers scss (css) nommées `<NOM>.module.scss`.

==== src/app/layout.js

Le layout de la page, comment elle doit ressembler avec le fichier
`globals.scss` qui défini les règles de base du fichier.

#separateur

Pour plus d'information sur la structure du projet lui même, visitez cette #link("https://nextjs.org/docs/getting-started/project-structure")[page] !

=== tutos/

Le fichier source et l'output de ce tuto lui même. `config.json` permet de
configurer selon vos choix (à noter que vous ne pouvez pas compiler ce tuto pour
deux raisons, de 1 parce qu'il faut typst et de deux parce que la template est
privée)

Le tuto en pdf se trouve dans `tutos/out/`

=== .dockerignore

Fichier de configuration pour docker; ignore les fichiers/dossiers à l'intérieur
de ce fichier dans on copie le projet à l'intérieur de docker

=== .eslintrc.json

Un fichier de configuration pour `lint` notre code; permet d'avoir un code
propre et suivant des conventions.

=== .gitignore
Fichier de configuration pour git; comme pour .dockerignore, git ignore les
fichiers/dossiers à l'intérieur de ce fichier pour toutes les opérations qu'on
effectue

=== Dockerfile
Fichier de configuration pour docker; permet de créer une image docker et
d'expliquer comment devrait fonctionner notre code. Rend le partage beaucoup
plus simple et consistent, plus de phrase du type "oUi MaIs Ça MaRcHe SuR mOn
Pc"

=== LICENSE
Parle de lui même

=== next.config.mjs

Fichier de configuration pour next; permet la configuration du projet tel que
pour l'exportation par exemple.

=== package-lock.json

Fichier généré automatiquement par npm; permet d'avoir exactement les mêmes
librairies entre deux pc, ne *jamais* toucher à ce fichier.

=== package.json

Fichier de configuration de npm; permet d'indiquer les scripts et les libraries
qu'on utilise. Automatise beaucoup la gestion des projets.

=== postcss.config.js

Fichier de configuration de postcss;

=== README.md

Assez évident mais l'entrée du projet, doit contenir la base pour toute personne
pour lancer et utiliser le projet.

=== tailwind.config.js

Fichier de configuration de tailwind;

#separateur

Cette énumération peut faire peur (et mal à la tête) mais elle vous servira si
vous êtes perdu !

Maintenant passons à comment bien utiliser git et comment build et lancer le
projet!
#colbreak()
= Utilisation de git
Git est un outil très puissant. Etant donné que nous seront 7 personnes à coder
en même temps, il faut qu'on s'organise.

4 principes important à connaitre:

/ Les commits: Ce sont les points de sauvegarde de votre code, comme pour un jeu vidéo c'est
  important d'en faire plein avec des vrais noms pour ne pas se perdre

/ Les branches: C'est l'équivalent à plusieurs fichiers de sauvegarde dans un jeu, vous pouvez
  avoir une partie en ayant fait une route génocide ou une autre partie en ayant
  fait une route pacifiste. Comme pour les commits, vous devez bien nommer ces
  branches pour pas qu'on se perdent.

/ Les merges: Pour le coup à la différence des jeux vidéos, on peut réunir ces fichiers de
  sauvegarde pour en faire une unie ayant tous nos points de sauvegardes. Cela
  permet qu'une fois qu'on sait que ce fichier de sauvegarde ne contient pas de
  bugs, de réunir le travail de tout le monde sur un endroit *stable et sûr*.

/ Les Pull Requests (alias PR): Pour être sûr que notre merge ne soit pas mauvais, on passe par une phase
  directement sur github qui permet aux gens de vérifier que notre code soit bon
  et en même temps cela permet à github de vérifier automatiquement que le code
  compile.

== L'organisation

Nous allons donc nous organiser selon ce système:

== Branch & checkout

Quand vous avez quelque chose à coder, genre rajouter un footer au site, il faut
créer une branch comme ceci :

```sh
git branch footer-add
```
Puis ensuite il faut aller sur cette branche à l'aide de cette commande

```sh
git checkout footer-add
```
Vous pouvez ensuite coder dessus!

== Commit
Quand vous voulez sauvegarder votre code, allez-y de façon intelligente. Ne
faite pas un commit avec la moitié d'une ligne. Vous faire un commit, il faut
faire :

#{
  set text(size: 10pt)
  long(```sh
    git add .
    git commit -m "Le message principale" \
    -m "description qui n'est pas obligatoire"
    ```)
}
`git add .` permet d'ajouter tout le code au commit, il faut changer le `.` par
le chemin/fichier/dossier que vous voulez

Je rappelle que le backslash permet de sauter une ligne, ce n'est pas du tout
obligatoire.

== Push

Après que vous ayez fait tout vos commits, vous devez envoyer le code sur le
repo du projet. Pour cela, il faut faire: ```sh
git push origin footer-add
``` Le nom de votre branch et de celle distante doit être la même ! `origin` est
le nom donné automatiquement au repo distant.

== PR

Après avoir push sur votre branch tout votre code, il faut que vous merge votre
branche avec celle de `main`. Pour cela vous avez besoin d'allez directement sur
la page #link("https://github.com/ivelter/ndi2023/pulls", [`Pull requests`]) de
github. Pour cette partie, on vous aidera directement le jour J.

== Pull

Et enfin, il est possible qu'entre temps, quelqu'un ait avancé sur la branch ou
merge directement sur le main. Dans ce cas là vous devez mettra à jour votre
branch.

La commande est celle-ci :

```sh
git pull origin footer-add
```

Et si quelqu'un a merge:

```sh
git pull origin main
```

#separateur

Vous connaissez maintenant la base pour utiliser git correctment,
#colbreak()
#colbreak()
= Build le projet

Il ne manque plus qu'à voir le résultat du projet !

== Build pour tester le projet
Il suffit de faire dans le terminal du projet ```sh
npm run dev
``` Il suffit ensuite de se rendre sur la page indiquée!

== Build pour la production

La command est simple, il faut faire: ```sh
npm run lint && npm run build
```

Cela va vérifier si le projet suit bien les conventions de base puis va build le
projet dans le dossier `out/` (voir au dessus)
