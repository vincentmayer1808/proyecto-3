import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ifChecked } from './ifChecked.js';
import { clearG } from './clearG.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');

const canvaPrec = document.getElementById('graficoPrec');
const canvaH = document.getElementById('graficoH');

const checkPrec = document.getElementById('checkPrec');
const checkTemp = document.getElementById('checkTemp');
const checkHum = document.getElementById('checkHum');
const checkWind = document.getElementById('checkWind');

let chartP, chartH;

const handlerRequest = async () => {
  console.log('handlerRequest');

  clearG(chartP);
  clearG(chartH);

  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;
  // console.log(daily);
  // console.log(hourly);

  if (checkPrec.checked === true) {
    chartP = createGraphPrec(canvaPrec, hourly);
  }

  if (checkHum.checked === true) {
    chartH = createGHumidity(canvaH, hourly);
  }

  // ifChecked(checkPrec, {
  //   chartP : createGraphPrec(canvaPrec, hourly)
  // });
  // ifChecked(checkHum, {
  //   chartH : createGHumidity(canvaH, hourly)
  // });
};

button.addEventListener('click', handlerRequest);
