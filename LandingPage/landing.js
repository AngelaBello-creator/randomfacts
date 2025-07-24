import { getData } from './api.js';          
import { updateFact } from './function.js'; 
import { addFavorite, initializeFavorites } from './fav.js'; 


let currentFact = "";

const randomizeButton = document.querySelector(".buttonRandomize");
const heartButton = document.querySelector(".buttonHeart")

initializeFavorites ();

randomizeButton.addEventListener("click", async () => {
    const newFact = await getData();
    currentFact = newFact;
    updateFact(newFact);

});

heartButton.addEventListener("click", async () => {
    if (currentFact) {
        addFavorite(currentFact);
    }
});

const heartIcon = document.querySelector(".heart");
const closeButtons = document.querySelectorAll('[data-close-button]');
const mainView = document.getElementById('mainView');
const favoritesView = document.getElementById('favoritesView');

heartIcon.addEventListener("click", () => {
  mainView.classList.add('hidden');
  favoritesView.classList.remove('hidden');
});


closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    favoritesView.classList.add('hidden');
    mainView.classList.remove('hidden');
  });
});