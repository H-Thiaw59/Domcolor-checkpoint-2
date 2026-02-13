# Domcolor-checkpoint-2
Exo DOM 2 

Voici une **version formelle et académique** du README adaptée à une soumission d’évaluation.

---

# 📘 README – Checkpoint DOM 2

## Changeur de Couleurs Interactif

---

## 1. Informations Générales

**Intitulé du projet :** Changeur de couleurs interactif
**Module :** Manipulation du DOM
**Technologies utilisées :** HTML5, CSS3, JavaScript (ES6)
**Type :** Application web front-end
**Nature :** Exercice pratique évalué

---

## 2. Objectif Pédagogique

Ce projet vise à démontrer la capacité à :

* Structurer un document HTML conforme aux standards
* Appliquer une mise en forme CSS cohérente
* Manipuler dynamiquement le DOM via JavaScript
* Implémenter une logique algorithmique simple
* Gérer les événements utilisateur

L’exercice consiste à développer une interface permettant de modifier dynamiquement la couleur d’un élément graphique à l’aide d’un bouton.

---

## 3. Description Fonctionnelle

L’application contient :

* Un titre
* Une boîte colorée
* Un bouton interactif

Lorsque l’utilisateur clique sur le bouton :

1. Une couleur aléatoire est générée
2. La couleur d’arrière-plan de la boîte est modifiée dynamiquement
3. La transition est visible instantanément dans le navigateur

---

## 4. Architecture du Projet

```
/projet-dom-2
│
├── index.html
├── style.css
└── script.js
```

### 4.1 index.html

Contient :

* La structure principale du document
* La liaison vers le fichier CSS
* La liaison vers le fichier JavaScript
* Les éléments structurants : conteneur, boîte, bouton

### 4.2 style.css

Gère :

* La mise en page centrée
* Le dimensionnement de la boîte
* La couleur par défaut
* L’apparence visuelle du bouton
* Les effets de transition

### 4.3 script.js

Contient :

* L’écoute de l’événement `DOMContentLoaded`
* La sélection des éléments via `document.getElementById()`
* La fonction `getRandomColor()`
* L’événement `click` déclenchant la modification dynamique

---

## 5. Méthodologie Technique

### 5.1 Gestion du chargement du DOM

L’événement `DOMContentLoaded` garantit que le script s’exécute uniquement lorsque la structure HTML est entièrement disponible.

### 5.2 Sélection des éléments

Les éléments sont ciblés via leur identifiant unique :

```javascript
document.getElementById()
```

### 5.3 Génération d’une couleur aléatoire

La fonction `getRandomColor()` :

* Génère une chaîne hexadécimale
* Utilise une boucle itérative
* Sélectionne aléatoirement 6 caractères parmi 16 valeurs possibles

Format généré :

```
#RRGGBB
```

### 5.4 Gestion de l’interaction utilisateur

Un écouteur d’événement est attaché au bouton :

```javascript
addEventListener("click")
```

L’action déclenche la modification de la propriété CSS :

```javascript
element.style.backgroundColor
```

---

## 6. Conformité aux Consignes

| Exigence                      | Respectée |
| ----------------------------- | --------- |
| Structure HTML complète       | Oui       |
| Séparation HTML / CSS / JS    | Oui       |
| Utilisation DOMContentLoaded  | Oui       |
| Fonction getRandomColor()     | Oui       |
| Événement click fonctionnel   | Oui       |
| Interaction dynamique visible | Oui       |

---

## 7. Résultats et Tests

Test effectué dans un navigateur web moderne :

* Chargement sans erreur
* Bouton fonctionnel
* Couleur modifiée à chaque clic
* Interface stable et responsive

Aucune dépendance externe requise.

---

## 8. Compétences Démontrées

* Manipulation du DOM
* Gestion des événements
* Logique algorithmique de génération aléatoire
* Organisation modulaire des fichiers
* Respect des standards web
