const starchipsNumber = document.querySelector(".num_starships");
const planetsNumber = document.querySelector(".num_planets");

onInit();

async function onInit() {}

async function getCharsNumber() {
  const response = await fetch("https://swapi.dev/api/people/");
  const response_1 = await response.json();
  nombrePersonnages = response_1.count;
  document.querySelector(".num_chars").textContent = nombrePersonnages;
}

async function getStarshipsNumber() {
  const response = await fetch("https://swapi.dev/api/starships/");
  const response_1 = await response.json();
  nombreVehicules = response_1.count;
  document.querySelector(".num_starships").textContent = nombreVehicules;
}

async function getPlanetNumber() {
  const response = await fetch("https://swapi.dev/api/planets/");
  const response_1 = await response.json();
  nombrePlanetes = response_1.count;
  document.querySelector(".num_planets").textContent = nombrePlanetes;
}

getCharsNumber();
getStarshipsNumber();
getPlanetNumber();
