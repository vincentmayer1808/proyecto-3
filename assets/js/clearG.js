export const clearG=(chart)=>{
    try {      
        if(chart){
            chart.destroy();
        }
    } catch (error) {

        let alerta = new swal('No se destruyo el grafico');
        return alerta
    }

    // try {
    //     if(chart){
    //         console.log(chart)
    //         chart.forEach((element) => {
    //             console.log(element.canvas);
    //             element.destroy();  
    //             console.log(element.canvas);
                 
    //         });
    //         chart.splice(0,chart.length); 
    //     }else{
    //         console.log("array vacio");
    //     }
    // } catch (error) {
    //     console.log(error)
    // }

}