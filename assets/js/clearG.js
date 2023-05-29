export const clearG=(chart)=>{
    // try {      
    //     if(chart){
    //         chart.destroy();
    //     }
    // } catch (error) {
    //    console.log("error chartArray"); 
    // }

    try {
        if(chart){
            chart.forEach(element => {
                console.log(element.canvas);
                element.destroy([0]);  
                console.log(element.canvas);
                 
            });
            chart.splice(0,chart.length);
            
        }else{
            console.log("array vacio");
        }
    } catch (error) {
        console.log(error)
    }

}