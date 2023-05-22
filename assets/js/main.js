import { createDailyArray, createHourlyArray } from "./formatdata.js";
import { makeRequest } from "./request.js";

const input=document.getElementById('indicador')
const button=document.getElementById('consultar')

const handlerRequest= async()=>{
    console.log('handlerRequest')
    const respuesta=await makeRequest(input)
    const {daily,hourly}=respuesta
    console.log(daily)
    console.log(hourly)
    const dailyArray=createDailyArray(daily.temperature_2m_max,daily.temperature_2m_min,daily.time)
    console.log(dailyArray)
    const hourlyArray=createHourlyArray(hourly.precipitation_probability,hourly.relativehumidity_2m,hourly.temperature_2m,hourly.time,hourly.windspeed_10m)
    console.log(hourlyArray)

    // const dataArray=createDataArray(daily)
    // console.log(dataArray)

}

button.addEventListener('click',handlerRequest)


