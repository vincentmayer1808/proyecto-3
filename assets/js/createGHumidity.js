export const createGHumidity = (canvas, data) => {
  try {
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    const chart = new Chart(canvas, {
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

    return chart;
  } catch (error) {
    let alerta = new swal('No se encontro la humedad');
    return alerta;
  }
};
