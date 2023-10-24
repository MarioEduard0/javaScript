const toggleButton = document.getElementById("toggle-types");
const typesContainer = document.querySelector(".types");
const divsInsideTypes = typesContainer.querySelectorAll("div");

const container_pokemon_cards = document.getElementById("pokemon");

var textArray = [];

var allPokemonData = [];

let isTypesVisible = false;

toggleButton.addEventListener("click", () => {
  if (!isTypesVisible) {
    typesContainer.style.display = "flex";
    setTimeout(() => {
      typesContainer.style.opacity = 1;
      typesContainer.style.top = "0";
    }, 10);
  } else {
    typesContainer.style.opacity = 0;

    typesContainer.style.top = "-50px";
    setTimeout(() => {
      typesContainer.style.display = "none";
    }, 210);
  }

  isTypesVisible = !isTypesVisible;

  toggleButton.classList.toggle("active");

  divsInsideTypes.forEach((div) => {
    div.classList.remove("active");
  });

  textArray = [];
});

divsInsideTypes.forEach((div) => {
  div.addEventListener("click", () => {
    const pElement = div.querySelector("p");
    const pText = pElement.textContent;

    const index = textArray.indexOf(pText);

    if (index !== -1) {
      textArray.splice(index, 1);
      div.classList.remove("active");
    } else {
      textArray.push(pText);
      div.classList.add("active");
    }
  });
});

var card_height = container_pokemon_cards.clientHeight;
var card_width = container_pokemon_cards.clientWidth;

container_pokemon_cards.addEventListener("mousemove", (evt) => {
  const { layerX, layerY } = evt;

  const yRotation = ((layerX - card_width / 2) / card_width) * 10;
  const xRotation = ((layerY - card_height / 2) / card_height) * 3;

  var string_result = `
  perspective(500px)
  scale(1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`;

  container_pokemon_cards.style.transform = string_result;
});

container_pokemon_cards.addEventListener("mouseleave", () => {
  var string_result = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`;

  container_pokemon_cards.style.transform = string_result;
});

function loafPokemons() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  async function getAllPokemonData() {
    const allPokemon = [];
    let nextUrl = apiUrl;

    do {
      const response = await fetch(nextUrl);
      const data = await response.json();
      const pokemonList = data.results;

      for (const pokemon of pokemonList) {
        const pokemonData = await fetchPokemonData(pokemon.url);
        allPokemon.push(pokemonData);
      }

      nextUrl = data.next;
    } while (nextUrl);

    return allPokemon;
  }

  async function fetchPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  getAllPokemonData().then((pokemonArray) => {
    allPokemonData = pokemonArray;
  });
}

function addCards() {
  allPokemonData.forEach((pokemonData) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemon";

    const pokeImg = document.createElement("div");
    pokeImg.className = "poke-img";
    const img = document.createElement("img");
    img.src = pokemonData.spriteUrl;
    pokeImg.appendChild(img);

    const pokeCardContent = document.createElement("div");
    pokeCardContent.className = "poke-card";

    const pokemonName = document.createElement("p");
    pokemonName.className = "pokemon-name";
    pokemonName.textContent = pokemonData.name;

    pokeCardContent.appendChild(pokemonName);
    pokeCardContent.appendChild(pokeImg);

    pokemonCard.appendChild(pokeCardContent);

    container_pokemon_cards.appendChild(pokemonCard);
  });
}


// loafPokemons();
// addCards();