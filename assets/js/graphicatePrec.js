let chart;

export const graphicatePrec = (canvas, data) => {
  try {
    if(chart){
      chart.destroy()
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

     chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Precipitación en mm/hora',
            data: data.precipitation,
            fill: false,
            backgroundColor: 'rgb(0, 89, 255)',
            borderColor: 'rgb(0, 89, 255)',
            tension: 0.1,
          },
        ],
      },
    });
  } catch (error) {
    console.log(error)
    // let alerta = new swal('No se encontro la precipitación');
    // return alerta;
  }
};
