export const createDailyArray=(dailyDataMax,dailyDataMin,dailyDataT)=>{
    let dailyArray=[]
    for(let i =0;i<dailyDataT.length;i++){
        dailyArray[i]={"max":dailyDataMax[i],"min":dailyDataMin[i],"time":dailyDataT[i]}
    }
    
    return dailyArray    

}
export const createHourlyArray=(hourlyDataPrec,hourlyDatahum,hourlyDatatemp,hourlyDataT,hourlyDataWind)=>{
    let hourlyArray=[]
    for(let i =0;i<hourlyDataT.length;i++){
        hourlyArray[i]={"PrecipProb":hourlyDataPrec[i],"Humidity":hourlyDatahum[i],"time":hourlyDataT[i],"WindSpeed":hourlyDataWind[i],"temp":hourlyDatatemp[i]}
    }
    
    return hourlyArray    

}



// export const createDataArray=(data)=>{
//     let dataArray=[]
//     const largo=data.time.length
//     const keys=Object.keys(data)
//     for(let key in data){
//         for(let i=0;i<largo;i++){
//             let k=key
//             console.log(data)
//             console.log(key)
//             let arr=data.k
//             console.log(data.time[i])
//             console.log(data.key[i])
//             console.log(`${key}:${data.key[i]}`)
//             dataArray[i]={...`${key}:${data.key[i]}`}

//         }
//     }
//     console.log(dataArray)
//     return(dataArray)
// }