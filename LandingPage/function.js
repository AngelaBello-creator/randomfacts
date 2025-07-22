export const updateFact= (text) => {
    const randomFact= document.getElementById("fact");
    if(randomFact){
        randomFact.textContent = text;
    }
}