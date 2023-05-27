import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canva = document.getElementById('grafico');

const handlerRequest = async () => {
  console.log('handlerRequest');
  const respuesta = await makeRequest(input);
  const { daily, hourly } = respuesta;
  console.log(daily);
  console.log(hourly);

  createGraphPrec(canva, hourly);
 
};

button.addEventListener('click', handlerRequest);
