document.addEventListener("DOMContentLoaded", function () {

    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    changeColorBtn.addEventListener("click", function () {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });

});


Explication Technique
DOMContentLoaded

Permet d’exécuter le script uniquement lorsque le DOM est entièrement chargé.
Cela évite les erreurs liées aux éléments non encore disponibles.
 
  document.getElementById()

Permet de sélectionner des éléments via leur identifiant unique.

  getRandomColor()

Logique :

Crée une chaîne hexadécimale commençant par "#"

Sélectionne aléatoirement 6 caractères parmi :

0123456789ABCDEF


Génère une couleur valide au format :

#A3F9C1

  addEventListener("click")

Déclenche une fonction lorsque l’utilisateur clique sur le bouton.

Action exécutée :

colorBox.style.backgroundColor = newColor;


On modifie dynamiquement le style CSS via JavaScript.
