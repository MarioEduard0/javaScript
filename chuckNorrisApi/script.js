const next_button = document.getElementById("next-response");
const api_response = document.getElementById("api-response")
const combo_box = document.getElementById("combo-box")

const query_text = document.getElementById("query-selector");
const query_button = document.getElementById("next-query");


var selectedOptionUrl = ""

function loadComboBox() {
   fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(json => {
         const combo_box = document.getElementById('combo-box');
         const arraycategories = json;

         arraycategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            combo_box.appendChild(option);
         });
      });
}


function setElementsToListener() {
   next_button.onclick = function () {
      apiGet();
   };


   combo_box.onchange = function () {
      saveCategorieSelected();
   };

   query_button.onclick = function () {
      filterQuery();
   };
}

function filterQuery() {

   if (query_text.value != "" || query_text.value.length() >= 3) {
      var query = "https://api.chucknorris.io/jokes/search?query=" + query_text.value;
      fetch(query)
         .then(response => response.json())
         .then(json => writeQuery(json));
   }
}


function apiGet() {

   if (selectedOptionUrl != "") {
      fetch(selectedOptionUrl)
         .then(response => response.json())
         .then(json => writeApi(json));
   } else {
      fetch('https://api.chucknorris.io/jokes/random')
         .then(response => response.json())
         .then(json => writeApi(json));
   }
}

function saveCategorieSelected() {
   const selectedOption = combo_box.options[combo_box.selectedIndex];
   if (selectedOption != "None") {
      selectedOptionUrl = 'https://api.chucknorris.io/jokes/random?category=' + selectedOption.textContent;
      console.log(selectedOptionUrl);
   } else {
      selectedOptionUrl = "";
   }
}
function writeApi(json) {
   console.log(json)
   const text = json.value;
   let currentIndex = 0;

   function showText() {
      if (currentIndex < text.length) {
         api_response.textContent += text[currentIndex];
         currentIndex++;
         setTimeout(showText, 10);
      }
   }

   api_response.textContent = '';
   showText();
}

function writeQuery(json) {
//    var random = Math.floor(Math.random() * json.length());
//    const text = json[random].value;
   let currentIndex = 0;

   console.log(json);
   // console.log(json[random])


   // function showText() {
   //    if (currentIndex < text.length) {
   //       api_response.textContent += text[currentIndex];
   //       currentIndex++;
   //       setTimeout(showText, 10);
   //    }
   // }

   // api_response.textContent = '';
   // showText();
}

loadComboBox();
setElementsToListener();