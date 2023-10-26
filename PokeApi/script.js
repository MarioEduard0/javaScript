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
      typesContainer.style.translate = "0px -55px";
      typesContainer.style.paddingTop = "65px";
      typesContainer.style.marginLeft = "5px";
      typesContainer.style.marginRight = "5px";
      typesContainer.style.borderRadius = "15px";

      typesContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      typesContainer.style.opacity = 1;
      typesContainer.style.top = "0";
      typesContainer.style.marginBottom = "-175px";

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
    for (let index = 0; index < pokemonArray.length; index++) {
      addCards(pokemonArray, index);
    }
  });
}

function addCards(pokemonArray, index) {
  // Crear una nueva instancia de la clase .pokemon
  const containerPokemonCards = document.getElementById(
    "container-pokemon-cards"
  );
  const newPokemonInstance = document.createElement("div");
  newPokemonInstance.className = "pokemon";

  // Crear la estructura HTML para la nueva instancia
  newPokemonInstance.innerHTML = `
      <div class="poke-img ${pokemonArray[index].types[0].type.name}">
          <img src="${pokemonArray[index].sprites.other["official-artwork"]["front_default"]
    }" alt="" id="pokemon-image">
      </div>
      <div class="poke-card">
          <h2 class="pokemon-name">${pokemonArray[index].name}</h2>
          <div class="types-pokemon">
              <div class=${pokemonArray[index].types[0].type.name}>
                  <img src="design-ideas/types_icons/${pokemonArray[index].types[0].type.name
    }.png" alt="">
                  <p>${pokemonArray[index].types[0].type.name}</p>
              </div>
              ${pokemonArray[index].types[1]
      ? `<div class=${pokemonArray[index].types[1].type.name}>
                        <img src="design-ideas/types_icons/${pokemonArray[index].types[1].type.name}.png" alt="">
                        <p>${pokemonArray[index].types[1].type.name}</p>
                    </div>`
      : ""
    }

          </div>
      </div>
  `;

  // Agregar la nueva instancia al contenedor
  containerPokemonCards.appendChild(newPokemonInstance);
  applyRotationEffect(newPokemonInstance, pokemonArray[index]);
}

function applyRotationEffect(card, pokemon_data) {

  card.addEventListener("mousemove", (evt) => {
    const { layerX, layerY } = evt;
    const card_width = card.clientWidth;
    const card_height = card.clientHeight;

    const yRotation = ((layerX - card_width / 2) / card_width) * 10;
    const xRotation = ((layerY - card_height / 2) / card_height) * 3;

    const string_result = `
          perspective(500px)
          scale(1)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)`;

    card.style.transform = string_result;
  });

  card.addEventListener("mouseleave", () => {
    const string_result = `
          perspective(500px)
          scale(1)
          rotateX(0)
          rotateY(0)`;

    card.style.transform = string_result;
  });

  card.addEventListener("click", () => {
    createPopupCard(pokemon_data);
  });
}

function createPopupCard(pokemonData) {
  // Crear un div que cubra toda la pantalla (fondo oscuro con blur)
  const backgroundBlur = document.createElement("div");
  document.body.appendChild(backgroundBlur);

  // Crear un div centrado para la tarjeta emergente
  const popupContainerCentered = document.createElement("div");
  popupContainerCentered.className = "popup-container-centered";

  // Crear la tarjeta emergente
  const popupCard = document.createElement("div");
  popupCard.className = "popup-card";
  popupCard.id = "pop-up";

  popupCard.innerHTML = `
  
      <div class="popup-content">
          <div class="popup-header ${pokemonData.types[0].type.name}">
              <button class="close-popup ${pokemonData.types[0].type.name}"><img src="design-ideas/exit.png" alt=""></button>
              <h2 class="popup-pokemon-name">${pokemonData.name}</h2>
          </div>
          <div class="popup-body">
              <div class="info-pokemon-card">
                  <h2>ID</h2>
                  <p>${pokemonData.id}</p>
                  <h2>Height</h2>
                  <p>${pokemonData.height / 10}</p>
                  <h2>Weight</h2>
                  <p>${pokemonData.weight / 10}</p>
                  <h2>Ability</h2>
                  <div class="${pokemonData.types[0].type.name} ability">
                      <p>${pokemonData.abilities[0].ability.name}</p>
                  </div>
                  <h2>Type</h2>
                  <div class="card-poke-types">
                      <div class="${pokemonData.types[0].type.name}"><img src="design-ideas/types_icons/${pokemonData.types[0].type.name}.png" alt="">
                          <p>${pokemonData.types[0].type.name}</p>
                      </div>
                      ${pokemonData.types[1] ? `
                      <div class="${pokemonData.types[1].type.name}"><img src="design-ideas/types_icons/${pokemonData.types[1].type.name}.png" alt="">
                          <p>${pokemonData.types[1].type.name}</p>
                      </div>`: ""}
                  </div>
              </div>
              <div class="img-pokemon-card">
                  <img src="${pokemonData.sprites.other["official-artwork"]["front_default"]}"
                      alt="Pokemon">
              </div>
              <div class="card-poke-stats" id="car-poke-stats">
                  <h2>Base Stats</h2>
                  <div class="graphic-stats">
                      <p class="stats-name">HP</p>
                      <progress class="${pokemonData.types[0].type.name}" value="${pokemonData.stats[0].base_stat}" max="270"></progress>
                      <p class="stats-name">ATK</p>
                      <progress value="${pokemonData.stats[1].base_stat}" max="270"></progress>

                      <p class="stats-name">DEF</p>
                      <progress value="${pokemonData.stats[2].base_stat}" max="270"></progress>

                      <p class="stats-name">STK</p>
                      <progress value="${pokemonData.stats[3].base_stat}" max="270"></progress>

                      <p class="stats-name">SEF</p>
                      <progress value="${pokemonData.stats[4].base_stat}" max="270"></progress>

                      <p class="stats-name">SPD</p>
                      <progress value="${pokemonData.stats[5].base_stat}" max="270"></progress>

                      <p class="stats-name">Total</p>
                      <span class="stats-total  ${pokemonData.types[0].type.name}">${(pokemonData.stats[0].base_stat + pokemonData.stats[1].base_stat + pokemonData.stats[2].base_stat + pokemonData.stats[3].base_stat + pokemonData.stats[4].base_stat + pokemonData.stats[5].base_stat)} </span>
                  </div>
              </div>

          </div>
      </div>
  `;

  // Agregar la tarjeta emergente al div contenedor
  popupContainerCentered.appendChild(popupCard);

  // Agregar el div contenedor al cuerpo del documento
  document.body.appendChild(popupContainerCentered);

  // Agregar un evento para cerrar la tarjeta emergente al hacer clic en la "X"
  const closeButton = popupCard.querySelector(".close-popup");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(backgroundBlur);
    document.body.removeChild(popupContainerCentered);
  });
}

// loafPokemons();

// addCards();
