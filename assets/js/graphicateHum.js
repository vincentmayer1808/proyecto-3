let chart;
export const graphicateHumidity = (canvas, data) => {
  try {
    if(chart){
      chart.destroy()
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

     chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Humedad relativa',
            data: data.relativehumidity_2m,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  } catch (error) {
    console.log(error)
    // let alerta = new swal('No se encontro la humedad');
    // return alerta;
  }
};
