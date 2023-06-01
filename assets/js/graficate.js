import { createGraf } from './createGraf.js';

const checkTemp = document.getElementById('checkTemp');
const checkPrec = document.getElementById('checkPrec');
const checkHum = document.getElementById('checkHum');
const checkWind = document.getElementById('checkWind');

const temperatura = 'temperatura';
const precipitaciones = 'precipitaciones';
const humedad = 'humedad';
const viento = 'viento';

export const graficate = (data) => {
  let charts = [];
  console.log(charts);

  let hora = data.time.map((elemento) => elemento.split('T').join(' '));
  //   console.log(hora)
  console.log(temperatura);
  try {
    if (checkTemp.checked === true) {
      let datasets = {
        label: 'Temperatura',
        data: data.temperature_2m,
        backgroundColor: 'red',
        borderColor: 'red',
      };
      let chart = createGraf(datasets, hora, temperatura);
      charts.push(chart);
    }

    // console.log(error);

    if (checkPrec.checked === true) {
      let datasets = {
        label: 'Precipitaciones',
        data: data.precipitation,
        backgroundColor: 'grey',
        borderColor: 'grey',
      };
      let chart = createGraf(datasets, hora, precipitaciones);
      charts.push(chart);
    }

    if (checkHum.checked === true) {
      let datasets = {
        label: 'Húmedad Relativa',
        data: data.relativehumidity_2m,
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
      };
      let chart = createGraf(datasets, hora, humedad);
      charts.push(chart);
    }

    if (checkWind.checked === true) {
      let datasets = {
        label: 'Velocidad del Viento',
        data: data.windspeed_10m,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
      };
      let chart = createGraf(datasets, hora, viento);
      charts.push(chart);
    }

    console.log(charts);

    return charts;
  } catch (error) {
    console.log(error);
    // let alerta = new swal('No se encontro la humedad');
    // return alerta;
  }
};
