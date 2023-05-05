fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countriesData = document.getElementById('countries-data');
  data.forEach(country => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const regionCell = document.createElement('td');
    const subregionCell = document.createElement('td');
    const populationCell = document.createElement('td');
    nameCell.textContent = country.name.common;
    regionCell.textContent = country.region;
    subregionCell.textContent = country.subregion;
    populationCell.textContent = country.population;
    row.appendChild(nameCell);
    row.appendChild(regionCell);
    row.appendChild(subregionCell);
    row.appendChild(populationCell);
    countriesData.appendChild(row);
  });
})
