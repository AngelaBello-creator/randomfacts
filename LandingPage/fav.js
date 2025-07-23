import { getData } from './api.js';

const favorites = [];
let currentFact = "";

const factContainer = document.getElementById("fact");
const favoritesContainer = document.getElementById("favorites");

