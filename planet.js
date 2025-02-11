
const planetTable = document.getElementById('planetTableBody');


async function getPlanet(){
    const response = await fetch('https://swapi.dev/api/planets/');
    const response_1= await response.json();

    dataPlanetes = response_1.results;

    let pageSuiv = data.next;
    while(pageSuiv =! null){
       let resPageSuiv = await fetch(pageSuiv);
        let pageSuivData = await resPageSuiv.json();

        dataPlanetes = dataPlanetes.concat(pageSuivData.result);

    }
   
}