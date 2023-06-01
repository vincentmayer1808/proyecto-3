const checkboxTemperature = document.getElementById('checkTemp');
const checkboxPrecipitation = document.getElementById('checkPrec');
const checkboxHumidity = document.getElementById('checkHum');
const checkboxWindSpeed = document.getElementById('checkWind');


export let ifChecked = (input, createGraph) => {
  console.log(input.checked);
  console.log(createGraph);

  try {
    const datasets = [];
    const checkedCheckboxes = () => {
      if (checkboxTemperature.checked) {
        datasets.push({
          label: 'Temperatura',
          data: hourly.temperature_2m,
          backgroundColor: 'red',
          borderColor: 'red',
        });
      }

      if (checkboxHumidity.checked) {
        datasets.push({
          label: 'Humedad',
          data: hourly.relativehumidity_2m,
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
        });
      }

      if (checkboxPrecipitation.checked) {
        datasets.push({
          label: 'Probabilidad de Precipitación',
          data: hourly.precipitation_probability,
          backgroundColor: 'grey',
          borderColor: 'grey',
        });
      }

      if (checkboxWindSpeed.checked) {
        datasets.push({
          label: 'Velocidad del Viento',
          data: hourly.windspeed_10m,
          backgroundColor: 'yellow',
          borderColor: 'yellow',
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};

// Hacer todo generate grafic como funcion externa exportado al main que incluye otras funcion externa, esa function generate grafic devuelve un array de objetos siendo los diferentes grafico
