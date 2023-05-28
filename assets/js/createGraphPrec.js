
export let createGraphPrec;

createGraphPrec = (canvas, data) => {
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.time,
      datasets: [
        {
          label: 'Precipitation',
          data: data.precipitation,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
  });
  return chart
};
