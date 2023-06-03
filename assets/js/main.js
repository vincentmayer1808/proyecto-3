import { makeRequest } from './request.js';
import { graphicatePrec } from './graphicatePrec.js';
import { graphicateHumidity } from './graphicateHum.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const spinner = document.getElementById('spinner');
const canvaPrec = document.getElementById('graficoPrec');
const canvaH = document.getElementById('graficoH');

const checkPrec = document.getElementById('checkPrec');
const checkTemp = document.getElementById('checkTemp');
const checkHum = document.getElementById('checkHum');
const checkWind = document.getElementById('checkWind');

const handlerRequest = async () => {
  spinner.classList.remove('hidden');

  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;

  if (checkPrec.checked === true) {
    graphicatePrec(canvaPrec, hourly);
  }

  if (checkHum.checked === true) {
    graphicateHumidity(canvaH, hourly);
  }
  
  spinner.classList.add('hidden');
};

button.addEventListener('click', handlerRequest);
