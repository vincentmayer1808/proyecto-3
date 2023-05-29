import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { ifChecked } from './ifChecked.js';
import { clearG } from './clearG.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canvaPrec = document.getElementById('graficoPrec');
const checkPrec = document.getElementById('checkPrec');
const checkTemp = document.getElementById('checkTemp');
const checkHum = document.getElementById('checkHum');
const checkWind = document.getElementById('checkWind');

let chartP;

const handlerRequest = async () => {

// clearG(chartP)

  console.log('handlerRequest');
  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;
  console.log(daily);
  console.log(hourly);
  
  // chartP = createGraphPrec(canvaPrec, hourly);

  if (checkPrec.checked === true) {
    chartP = createGraphPrec(canvaPrec, hourly);
  }

  // console.log(error);

  // ifChecked(checkPrec, chartP);

  // console.log(error);

  console.log('final');
};

button.addEventListener('click', handlerRequest);
