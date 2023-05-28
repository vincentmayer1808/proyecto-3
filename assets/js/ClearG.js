export const ClearG=(chart)=>{
    try {
        
        if(chart){
            chart.destroy();

        }
    } catch (error) {
       console.log("error chartArray"); 
    }
}