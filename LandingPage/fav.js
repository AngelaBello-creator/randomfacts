const STORAGE_KEY = "favFacts";
let favorites = loadFavorites ();


function loadFavorites() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveFavorites () {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function addFavorite (fact) {
    if (!favorites.includes(fact)) {
        favorites.push(fact);
        saveFavorites () ;
        renderFavorites();
    }
}

export function renderFavorites () {
    const container = document.getElementById("favfact");
    if (!container) return;
    container.innerHTML = '';


    if (favorites.length === 0) {
        container.textContent = "You haven't added any favorite facts yet";
    }
    else {
        const ul = document.createElement("ul");
        ul.classList.add("favList");

        favorites.forEach(fact => {
            const li = document.createElement("li");
            li.textContent = fact;
            ul.appendChild(li);
        });
            container.appendChild(ul); 
        
    }
}

export function initializeFavorites () {
    renderFavorites();
}