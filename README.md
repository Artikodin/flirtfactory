# FLIRT FACTORY

## CONCEPT

### La Flirt Factory

La Flirt Factory est une expérience web sur desktop ayant pour but de retracer l’histoire de la séduction depuis l’Antiquité à nos jours.

Cela prend la forme d’une usine en 3D. L’utilisateur va être placé comme un technicien qui va avoir pour but de réparer toutes les parties défaillantes de l’usine pour qu’elle fonctionne à nouveau.

### Expérience

L’internaute arrive sur l’expérience qui lui est présentée par une petite phrase introductive. L’usine n’est pas encore lancée, il doit réaliser une interaction pour enclencher les mécanismes et débuter l’expérience.

Une fois la machine lancée, il va se rendre compte qu’elle est défaillante. Il va alors devoir parcourir les époques pour réparer tous les dysfonctionnements de chaque bloc.

En arrivant sur une époque, on lui expose le problème qu’il doit résoudre et il doit réaliser une interaction pour réparer le bloc. En faisant cela, le bloc se remet à fonctionner correctement. Il peut passer à l’époque suivante.

Une fois la machine entièrement réparée, le technicien est récompensé !

### Histoire de la séduction

En arrivant sur chaque époque, un petit texte va expliquer où en est la séduction dans l’histoire pour la période affichée. Et les éléments représentés sur la machine sont en fait des moyens de séductions utilisés à l’époque, que l’utilisateur va pouvoir découvrir.

Si il souhaite avoir plus d’information sur le contexte historique de l’époque, il pourra afficher plus de contenu: des définitions, des médias et du texte.

### Récompense de l’utilisateur

A la fin de l’expérience, l’utilisateur revient sur les différents moyens de séduction qu’il a rencontré. Il peut en choisir un, et la Flirt Factory va lui proposer une catchphrase en rapport avec ce moyen de séduction. Il va pouvoir sélectionner la catchphase qui lui plaît le plus et l’utiliser sur les réseaux sociaux ou les sites de rencontres pour engager la conversation et pécho.

## TECHNIQUE

### Gestion des données

La Flirt Factory possède 4 types de contenus :  
-   Du contenu narratif, relatif à l’expérience pour engager l’utilisateur.   
-   Du contenu informatif, expliquant l’histoire de la séduction à l’époque visionnée.    
-   Du contenu anecdotique au ton plus léger présentant les différents moyens de séductions de chaque époque.    
-   Des définitions du vocabulaire de la séduction utilisé au fil de l’expérience.
    
Les données étant statiques, nous allons nous orienter vers un format Json organisé sous cette forme:

```json
{
      "epoques": [
        {
          "name": "MOYEN-AGE ",
          "date": "476 - 1492",
          "short": "Courtoisie",
          "intro": "La plupart de relations de l'époque sont des mariages arrangés, le vrai amour se déroule hors-mariage et doit donc rester secret. Apparaît l'amour courtois, un amour purement sentimental qui consiste à prouver sa bravoure pour gagner le coeur de sa dame. ",
          "description": "Au Moyen- ge apparaît une nouvelle forme de séduction: la courtoisie. A cette époque, la norme est au mariage arrangé. Le vrai amour se déroule hors-mariage et doit rester secret, sous peine de très lourdes conséquences. \n        Les relations sont donc très compliquées et mêlent passion, désespoir, plaisir et souffrance. Un coup de foudre peut alors durer toute une vie, les deux amoureux ne vivant que l'un pour l'autre !\n        L’amour courtois est un amour purement sentimental et ne suppose pas forcément de relation physique. Mais il s'exprime par des actes : il fallait prouver sa bravoure auprès de sa dame, à l'image des chevaliers gagnant une bataille ou délivrant leurs princesses.",
          "symbols": [
            {
              "name_symbol": "Tournois",
              "description_symbol": "Des tournois étaient souvent organisés par les seigneurs. En plus d'entraîner leurs chevaliers, les tournois étaient l'occasion pour ces derniers de prouver leurs bravoures auprès des dames."
            },
            {
              "name": "Fleurs",
              "description": "L’Eglise très stricte empêchait aux couples d’afficher publiquement leur affection, les fleurs devennaient alors un moyen de faire passer ses sentiments. Selon sa composition et son arrangement, le bouquet pouvait délivrer un message en toute discrétion."
            },
            {
              "name": "Serenades",
              "description": "La mode était aux sérénades. Pour déclarer sa flamme, le prétendant, à l'image chantait son amour sous le balcon de sa Juliette. Mais auparavant, il devait effectuer d’incessants allers-retours dans la rue pour attirer son attention. Pas très discret mais efficace…"
            }
          ]
        }
      ]
    }
```


Nous avons aussi pensé à traduire notre expérience en anglais. Mais cela n’aurait pas d’intérêt car le contexte historique et les expressions utilisées sont majoritairement propre au français.

### Arborescence

![](https://lh6.googleusercontent.com/j6H_lgcLEtkNQ-5RaQXzLyAev2xoErbotFNzP570Fs1NCAx9yqqZ4c12XDkUVFiwUVVA91ULh81GHaFj-sqtn4YKQQJYKCW6Q-wh-ijKyTQTa5ihjtdAAmPkdapQabGSu-nQK915)

### Scope fonctionnel

![](https://lh4.googleusercontent.com/hHvfdsbS9rmfHRS4-YxIOt401YSRZ8nBLgIPPpCToDhV2qLSuQ3NzNFlWdcumTjlXE50CZ_8EC9apVhrXuxztTElixNaHMYf-YkfgMtRFd3kgbb8Dq6K7Cutsp6NI2Nb5YeTwhIv)

## Workflow graphistes / développeurs

### Organisation du projet

Nous nous sommes organisés sur Google Drive et avons créé un dossier “PRODUCTION” où seront déposés tous les assets graphiques et techniques.

### 3D

Les assets 3D et les animations devront être réalisés sur Cinema 4D, exportés en .fbx, ré-importés sur Blender puis exportés en .glb.

Nous pourrons ensuite l’import sur ThreeJs grâce au GLTFLoader ([https://threejs.org/docs/#examples/loaders/GLTFLoader](https://threejs.org/docs/#examples/loaders/GLTFLoader)).

Les objets 3D exportés devront être compressés au maximum, le nombre de polygone devra être le plus faible possible et directement animés sur C4D et Blender.

### Réalisation technique

Notre expérience est réalisée à l’aide de React et ThreeJs.

**Git: pour le versionning**

Pour partager nos travaux, d’en avoir l’historique et garder une pérennité au sein du code entre les deux développeurs, nous avons choisis d’utiliser le logiciel de versionning Git.
[https://git-scm.com/](https://git-scm.com/)

  

**React: pour les components**

Le framework React nous permettra de penser notre code sous forme de composants réutilisable au sein de l’application. Cela nous permettra un gain de temps et une clarté lors de l’intégration que nous souhaitons bénéficier pour notre projet.
[https://reactjs.org/](https://reactjs.org/)

  

**Styled-component: pour l’esthétique**

Styled component est une librairie pour gérer les styles, elle s'intègre parfaitement à react. Notre projet utilise react il était plus avisé d’utiliser un librairie allant de paire avec notre framework principal.
[https://www.styled-components.com/](https://www.styled-components.com/)

  

**React-pose: pour animer**

Pour notre projet nous avons besoin d’animation simple pour les transitions entres les différents éléments du dom. React-pose est un librairie qui gère l’animation en js et qui s'intègre parfaitement à react. Elle s’adapte parfaitement à notre projet.
[https://popmotion.io/pose/](https://popmotion.io/pose/)

  

**React-router: pour gérer les routes**

Notre projet ne contient pas de back-office, il prendra l’apparence d’un site statique. Nous avons donc besoin d’un système de routing gérer coté front et s’intégrant parfaitement à react. Nous avons donc opté pour react-router.
[https://reacttraining.com/react-router/core/guides/philosophy](https://reacttraining.com/react-router/core/guides/philosophy)

  
  

**react-hot-loader: pour faciliter le développement**

Pour faciliter l'intégration des différents composants react nous avons choisis d’utiliser le plugin react-hot-loader qui permet d’injecter les modifications à chaud sans avoir à recharger la page. Un gain de temps immense lorsque plusieur modification sont effectués sur un composant.
[https://github.com/gaearon/react-hot-loader#webpack-plugin](https://github.com/gaearon/react-hot-loader#webpack-plugin)

  

**Babel: pour convertir l’es6 en es5**

Pour ce projet nous utiliserons différentes ressources javascript qui prennent en compte la syntaxe ecmascript 6. Aujourd’hui tous les navigateurs ne sont pas capable de comprendre cette syntaxe. Pour porter notre expérience sur un maximum de navigateur et ainsi toucher un maximum d’utilisateur, nous allons utiliser le compilateur Babel qui permet de transformer le code es6 en es5.
[https://babeljs.io/](https://babeljs.io/)

  

**EsLint: pour normer le code**

Pour permettre une auto-correction et un respect des différents patterns lié à javascript et notamment à react nous allons utilisé le linter Eslint.
[https://eslint.org/](https://eslint.org/)

  

**Prettier: pour avoir un code homogène**

Afin de permettre un formatage homogène au sein du projet et éviter les faux positifs lors de nos échanges sur git nous avons mit en place le plugin de formatage Prettier.
[https://prettier.io/](https://prettier.io/)

  

**Threejs: pour réaliser les objets 3D**

Notre projet étant basé autour d’une expérience web en 3D à travers laquelle l’utilisateur pourra naviguer. Pour faciliter l'intégration des différents objets 3D fournis par les graphistes et leurs animations nous avons choisis de nous orienter vers le framework ThreeJs.
[https://threejs.org/](https://threejs.org/)

  

**Webpack: pour un bundle optimisé**

Afin de d’agencer ensemble toutes ces différentes ressource nous avons utilisé le bundler webpack. Bénéficiant d’une énorme popularité et communauté il sera plus facile pour nous de l'intégrer à notre projet et de corriger en cas de bug.
[https://webpack.js.org/](https://webpack.js.org/)