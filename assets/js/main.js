import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ClearG } from './ClearG.js';



const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canva = document.getElementById('grafico');
const canvaH = document.getElementById('graficoHumidity');

let chart1,chart2
const handlerRequest = async () => {
  console.log('handlerRequest');
  ClearG(chart1);
  ClearG(chart2);
  
  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;
  console.log(daily);
  console.log(hourly);

  chart1 =createGraphPrec(canva, hourly);
  chart2= createGHumidity(canvaH,hourly);
  
  
 
};

button.addEventListener('click', handlerRequest);





