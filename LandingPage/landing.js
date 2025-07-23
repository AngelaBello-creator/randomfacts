import { getData } from './api.js';          
import { updateFact, showFavAddedModal } from './function.js'; 

const button = document.querySelector(".buttonRandomize");
button.addEventListener("click", async () => {
    const newFact = await getData();
    updateFact(newFact);
});

const heartButton = document.querySelector(".buttonHeart");
heartButton.addEventListener("click", () => {
    showFavAddedModal();
});