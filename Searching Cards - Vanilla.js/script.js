let DATA = [
  { id: 0, name: "Subhan", status: "Graduated", university: "GCUF" },
  { id: 1, name: "Ahmad", status: "In Progress", university: "GCUF" },
  { id: 2, name: "Umer", status: "Not Graduated", university: "NUST" },
  { id: 3, name: "Zohaib", status: "In Progress", university: "GCU" },
  { id: 4, name: "Asad", status: "In Progress", university: "Fast" },
  { id: 5, name: "Arham", status: "Not Graduated", university: "NUST" },
];
// create cards
var cardContainer = document.getElementById("cardContainer");
var createAllCards = () => {
  for (let i = 0; i < DATA.length; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
  <div class="card-body">
  <h5 class="card-title">${DATA[i].name}</h5>
  <p class="card-text">${DATA[i].status}</p>
  <p class="card-text">${DATA[i].university}</p>
  </div>
  `;
    cardContainer.appendChild(card);
  }
};
// searching
var searchingFunc = () => {
  let searchValue = document.getElementById("searchBox").value;
  DATA.forEach((item) => {
    if (searchValue == item.name || searchValue == item.university) {
      var createCard = () => {
        cardContainer.innerHTML = "";
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML += `
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.status}</p>
        <p class="card-text">${item.university}</p>
        </div>
        `;
        cardContainer.appendChild(card);
      };
      createCard();
    }
  });
};
// checkBoxes functionality
// graduatedCheckBox
let showGraduated = () => {
  let graduatedCheck = document.getElementById("graduatedCheckBox");
  let graduated = DATA.filter((item) => item.status == "Graduated");
  if (graduatedCheck.checked) {
    cardContainer.innerHTML = "";
    graduated.forEach((item) => {
      var createCard = () => {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML += `
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.status}</p>
        <p class="card-text">${item.university}</p>
        </div>
        `;
        cardContainer.appendChild(card);
      };
      createCard();
    });
  } else {
    cardContainer.innerHTML = "";
  }
};
// notGraduatedCheckBox
let showNotGraduated = () => {
  let notGraduatedCheck = document.getElementById("notGraduatedCheckBox");
  let notGraduated = DATA.filter((item) => item.status == "Not Graduated");
  if (notGraduatedCheck.checked) {
    cardContainer.innerHTML = "";
    notGraduated.forEach((item) => {
      var createCard = () => {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.status}</p>
        <p class="card-text">${item.university}</p>
        </div>
        `;
        cardContainer.appendChild(card);
      };
      createCard();
    });
  } else {
    cardContainer.innerHTML = "";
  }
};
// inProgressCheckBox
let showInProgress = () => {
  let inProgressCheck = document.getElementById("inProgressCheckBox");
  let inProgress = DATA.filter((item) => item.status == "In Progress");
  if (inProgressCheck.checked) {
    cardContainer.innerHTML = "";
    inProgress.forEach((item) => {
      var createCard = () => {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.status}</p>
        <p class="card-text">${item.university}</p>
        </div>
        `;
        cardContainer.appendChild(card);
      };
      createCard();
    });
  } else {
    cardContainer.innerHTML = "";
  }
};
