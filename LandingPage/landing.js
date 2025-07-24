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
const favsModal = document.getElementById("favsModal");

heartIcon.addEventListener("click", () => {
  favsModal.classList.remove("hidden");
});

const closeButtons = document.querySelectorAll('[data-close-button]');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    favsModal.classList.add('hidden');
  });
});