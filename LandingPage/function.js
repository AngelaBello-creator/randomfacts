export const updateFact= (text) => {
    const randomFact= document.getElementById("fact");
    if(randomFact){
        randomFact.textContent = text;
    }
}

export const showFavAddedModal = () => {
    const modal = document.getElementById("favAddedModal");  
    if (modal) {
      modal.classList.remove("disappear");
  
      setTimeout(() => {
        modal.classList.add("disappear");
      }, 487);
    }
  };