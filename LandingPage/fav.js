const favorites = [];

export function addFavorite (fact) {
    if (!favorites.includes(fact)) {
        favorites.push(fact);
        renderFavorites();
    }
}

export function renderFavorites () {
    const container = document.getElementById("favfact");
    if (!container) return;

    if (favorites.length === 0) {
        container.textContent = "You haven't added any favorite facts yet";
    }
    else {
        container.innerHTML= "";
        favorites.forEach(fact => {
            const iteration = document.createElement("iteration");
            iteration.textContent = `${fact}`;
            container.appendChild(iteration); 
        });
    }
}