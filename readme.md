## 🚀 EcmaScript 
![cover](https://i.imgur.com/68hqWD5.png)
*By Militello Giuseppe*

### 📝Introduction
>ES6 est la version la plus récente de la norme ECMAScript, qui est utilisée pour définir le langage JavaScript. Elle a été publiée en 2015 et a apporté de nombreuses nouvelles fonctionnalités et améliorations au langage, telles que les classes, les fonctions fléchées, les promesses et bien d'autres.

>L'une des principales caractéristiques d'ES6 est sa capacité à rendre le code JavaScript plus concis et plus facile à lire, en introduisant de nouvelles constructions de langage qui permettent aux développeurs d'écrire du code plus propre et plus maintenable.

>Certaines des fonctionnalités les plus populaires de ES6 incluent les variables let et const, les fonctions fléchées, les classes, les modules, les promesses, les itérateurs et les générateurs.

>ES6 est devenu largement pris en charge par les navigateurs modernes, ce qui signifie que les développeurs peuvent maintenant utiliser ces nouvelles fonctionnalités sans avoir à se soucier de la compatibilité du navigateur.

>En fin de compte, ES6 a considérablement amélioré la façon dont les développeurs travaillent avec JavaScript, et est devenu une norme pour de nombreuses applications Web modernes.

## 💡NPM
> #### <i class="fa fa-gear fa-spin fa-2x" style="color: #2980b9; vertical-align: middle; "></i> <span style="font-weight:normal">Configuration</span>
```csd=
vérifier la version npm
puis npm init
npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"
Cibler le répertoire "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
```

## 🧑‍💻Package jSon de configuration:
```json=
{
  "name": "my_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel --no-babelrc src -w -d js --preset=env"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
````