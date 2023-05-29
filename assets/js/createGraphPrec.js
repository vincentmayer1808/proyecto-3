export const createGraphPrec = (canvas, data) => {
  const hora = data.time.map((elemento) => elemento.split('T').join(' '))

  const chart = new Chart(canvas, {
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
  return chart
};
