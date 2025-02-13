var planetTable = document.getElementById("planetTableBody");

//remplir le tableau en fonction du filtre
function remplirTable(data) {
  planetTable.innerHTML = "";

  data.forEach((planet, index) => {
    planetTable.innerHTML += `
          <tr>
            <td data-index="${index}">${planet.name}</td>
            <td data-index="${index}">${planet.climate}</td>
            <td data-index="${index}">${planet.population}</td>
          </tr>
        `;
  });
  document.querySelector("#result-count").textContent =
    "Nombre de planètes " + data.length;
}

function displayPlanete(event) {
  let indexPlanetTarget = event.target.getAttribute("data-index");

  let planetDetailSelect = dataPlanetes.find(
    (planet) => planet.index == indexPlanetTarget
  );

  document.querySelector(".population_details").textContent =
    planetDetailSelect.population;
  document.querySelector(".diameter_details").textContent =
    planetDetailSelect.diameter;
  document.querySelector(".climat_details").textContent =
    planetDetailSelect.climate;
  document.querySelector(".gravity_details").textContent =
    planetDetailSelect.gravity;
  document.querySelector(".name_details").textContent = planetDetailSelect.name;
}

document.querySelector("tbody").addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    displayPlanete(event);
  }
});
