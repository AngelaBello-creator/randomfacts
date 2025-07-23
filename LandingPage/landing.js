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
