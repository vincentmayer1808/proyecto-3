import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ClearG } from './ClearG.js';



const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canva = document.getElementById('grafico');
const canvaH = document.getElementById('graficoHumidity');

const chartArray=[];

const handlerRequest = async () => {
  
  ClearG(chartArray);
  

  const respuesta = await makeRequest(input);
  
  const { daily, hourly } = respuesta;
  // console.log(daily);
  console.log(hourly);
  
  chartArray.push(createGraphPrec(canva, hourly));
  chartArray.push(createGHumidity(canvaH,hourly));
  console.log(chartArray)

  

  
  
 
};

button.addEventListener('click', handlerRequest);





