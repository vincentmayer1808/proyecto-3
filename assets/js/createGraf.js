const contenedorGrafico = document.getElementById('contenedorGrafico');

export const createGraf = (datasets, hour, id) => {
  try {
   
    contenedorGrafico.innerHTML += `
        <canvas id="${id}"></canvas>
        `;
    let canvas = document.getElementById(id);
    console.log(canvas);
    
    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hour,
        datasets: [datasets],
      },
    });

    return chart;

  } catch (error) {
    console.log(error);
    //   let alerta = new swal('No se encontro la humedad');
    //   return alerta;
  }
};
