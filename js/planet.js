if (activePage == "index") {
  getCharsNumber();
  getStarshipsNumber();
  getPlanetNumber();
} else if (activePage == "planet") {
  getPlanet().then(() => {
    remplirTable(dataPlanetes);
  });
}
const filterPlanet = document.querySelector("#sortSelect");

const searchPlanet = document.querySelector("#searchInput");

function handleSearch(event) {
  searchValue = event.target.value;
  console.log(searchValue);
  dataPlanetesFiltered = dataPlanetes.filter((planet) =>
    planet.name.toLowerCase().startsWith(searchValue)
  );

  remplirTable(dataPlanetesFiltered);
  if (searchValue == "") {
    remplirTable(dataPlanetes);
  }
}

let searchValue = "";
let filterValue = "0";

searchPlanet.addEventListener("keyup", handleSearch);
filterPlanet.addEventListener("change", handleFilter);

function handleSearch(event) {
  searchValue = event.target.value.toLowerCase();
  applyFilters();
}

function handleFilter(event) {
  filterValue = event.target.value;
  applyFilters();
}

function applyFilters() {
  let filteredPlanets = dataPlanetes;

  if (searchValue !== "") {
    filteredPlanets = filteredPlanets.filter((planet) =>
      planet.name.toLowerCase().startsWith(searchValue)
    );
  }

  if (filterValue !== "0") {
    if (filterValue === "1") {
      filteredPlanets = filteredPlanets.filter(
        (planet) =>
          parseInt(planet.population) >= 0 &&
          parseInt(planet.population) <= 100000
      );
    } else if (filterValue === "2") {
      filteredPlanets = filteredPlanets.filter(
        (planet) =>
          parseInt(planet.population) >= 100000 &&
          parseInt(planet.population) <= 1000000
      );
    } else if (filterValue === "3") {
      filteredPlanets = filteredPlanets.filter(
        (planet) => parseInt(planet.population) >= 1000000
      );
    }
  }

  remplirTable(filteredPlanets);
}
