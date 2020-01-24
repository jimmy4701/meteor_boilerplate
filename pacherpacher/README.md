# Cours de développement Node JS / Meteor.JS

## Installation de Meteor
Sur meteor.com --> la doc

Pour les systèmes basés sur Unix
curl https://install.meteor.com/ | sh

Pour rappel : curl permet d'appeler des systèmes distants
Typiquement des appels d'URL

Pour Microsoft, il faut installer Chocolatey qui permet
de "compiler" meteor
Install de chocolatey : https://chocolatey.org/install
choco install meteor

Chocolatey se charge de l'install de meteor et des paquets

## Lancement d'un nouveau projet
meteor create --bare NOM_APP
Ex: meteor create --bare pascherpacher

meteor create --react NOM_APP
meteor create NOM_APP

## Installation de paquets de base
### React
npm i react react-dom react-router react-router-dom

react : coule de source
react-dom : paquet qui permet à react de manipuler le dom d'une page
react-router : permet de créer les routes de l'appli
react-router-dom : Tous les composants React pour gérer les routes
par ex: Route, Switch, BrowserRouter...

### Système de gestion des utilisateurs
Ce système il est préparé et géré par Meteor avec le paquet
account-password

Pour l'installer :
meteor add account-password

Ce paquet est basé sur account-base, qui est le coeur de système
utilisateur de Meteor.
Vous pouvez aussi utiliser d'autres méthodes d'authentification : 
- Pour facebook : account-facebook
- Pour google : account-google
- Pour twitter : account-twitter

Ce paquet permet de créer des comptes utilisateurs coté client
et coté serveur avec la commande suivante : 

Accounts.createUser({
    email: "bob@yopmail.com",
    password: "changeme",
    profile: {TOUTES LES DATA QUE VOUS VOULEZ},
    callback : () => {FONCTION APRES LA CRÉATION DU USER}
})

Ensuite vous pouvez connecter l'utilisateur avec :
Meteor.loginWithPassword(email, password, () => {})

Déconnecter l'utilisateur avec:
Meteor.logout()










