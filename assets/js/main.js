import { makeRequest } from './request.js';
// import { createGraphPrec } from './createGraphPrec.js';
// import { createGHumidity } from './createGHumidity.js';
// import { ifChecked } from './ifChecked.js';
// import { clearG } from './clearG.js';
import { graficate } from './graficate.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const contenedorGrafico = document.getElementById('contenedorGrafico');

// const canvaPrec = document.getElementById('graficoPrec');
// const canvaH = document.getElementById('graficoH');

// const checkPrec = document.getElementById('checkPrec');
// const checkTemp = document.getElementById('checkTemp');
// const checkHum = document.getElementById('checkHum');
// const checkWind = document.getElementById('checkWind');

// let chartP, chartH

const handlerRequest = async () => {
  let charts = [];
  console.log('handlerRequest');
  console.log(charts);
  // clearG(chartP);
  // clearG(chartH);
  contenedorGrafico.innerHTML = '';

  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;
  // console.log(daily);
  // console.log(hourly);

  charts = graficate(hourly);

  console.log(charts);
  // if (checkPrec.checked === true) {
  //   chartP = createGraphPrec(canvaPrec, hourly);
  // }

  // if (checkHum.checked === true) {
  //   chartH = createGHumidity(canvaH, hourly);
  // }
};

button.addEventListener('click', handlerRequest);
