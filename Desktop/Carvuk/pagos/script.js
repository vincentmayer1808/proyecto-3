// Obtener los datos de la API
fetch('https://sheetdb.io/api/v1/gbpgmslt5hr0l')
  .then(response => response.json())
  .then(data => {
    const driverSelect = document.getElementById('driver-select');
    const extraPaymentSelect = document.getElementById('extra-payment-select');
    const showButton = document.getElementById('show-button');
    const totalKmContainer = document.getElementById('total-km');
    const totalRutasContainer = document.getElementById('total-rutas');
    const totalViajesContainer = document.getElementById('total-viajes');
    const tarjetaContainer = document.getElementById('tarjeta');

    // Obtener una lista de los nombres de los conductores únicos
    const drivers = Array.from(new Set(data.map(item => item.driver)));

    // Agregar opciones al elemento select
    drivers.forEach(driver => {
      const option = document.createElement('option');
      option.value = driver;
      option.textContent = driver;
      driverSelect.appendChild(option);
    });

    // Agregar un evento de clic al botón "Mostrar Información"
    showButton.addEventListener('click', () => {
      const selectedDriver = driverSelect.value.trim();
      const extraPayment = extraPaymentSelect.value;

      // Filtrar los datos para obtener la información del conductor seleccionado
      const driverData = data.filter(item => item.driver.toLowerCase() === selectedDriver.toLowerCase());

      if (driverData.length > 0) {
        const uniqueTripDates = new Set(driverData.map(row => row.start_time));
        const numUniqueDays = uniqueTripDates.size;
        const tripDates = Array.from(uniqueTripDates);

        const totalKm = driverData.reduce((total, item) => total + (parseFloat(item.KM) || 0), 0);
        const formattedTotalKm = totalKm.toLocaleString();

        const uniqueRutas = new Set(driverData.map(item => item.id_ruta));
        uniqueRutas.delete(""); // Eliminar espacios vacíos
        const totalRutas = uniqueRutas.size;
        const formattedTotalRutas = totalRutas.toLocaleString();

        const uniqueViajes = new Set(driverData.map(item => item.id_viaje));
        uniqueViajes.delete(""); // Eliminar espacios vacíos
        const totalViajes = uniqueViajes.size;
        const formattedTotalViajes = totalViajes.toLocaleString();

        const tarjetaRuta = totalRutas * 3010;
        const formattedTarjetaRuta = tarjetaRuta.toLocaleString();

        const tarjetaViaje = totalViajes * 1150;
        const formattedTarjetaViaje = tarjetaViaje.toLocaleString();

        const tarjetaKm = totalKm * 76;
        const formattedTarjetaKm = tarjetaKm.toLocaleString();
        
        const puntualidad = numUniqueDays * 3000;
        const formattedNumUniqueDays = puntualidad.toLocaleString();

        let tarjetaTotal = tarjetaRuta + tarjetaViaje + tarjetaKm;
        if (extraPayment === 'si') {
          const extraPaymentAmount = numUniqueDays * 3000;
          tarjetaTotal += extraPaymentAmount;
        }
        const formattedTarjetaTotal = tarjetaTotal.toLocaleString();



        tarjetaContainer.innerHTML = `
          <img src="icono.png" alt="">
          <h2 class="driver">${selectedDriver}.</h2>
          <p>Rutas realizadas: ${formattedTotalRutas}</p>
          <p>Ganancia por rutas: $${formattedTarjetaRuta}</p>
          <p>Viajes realizados: ${formattedTotalViajes}</p>
          <p>Ganancia por viajes: $${formattedTarjetaViaje}</p>
          <p>Total de KM recorridos: ${formattedTotalKm} KM</p>
          <p>Ganancia por KMs: $${formattedTarjetaKm}</p>
          <p>Bono de puntualidad: $${formattedNumUniqueDays}</p>
          <p>Días trabajados: ${numUniqueDays}</p>
          <h3 class="total">Total: $${formattedTarjetaTotal} </h3>
          <h3>Fechas:</h3>
          <ul>
            ${tripDates.map(date => `<li>${date}</li>`).join('')}
          </ul>
        `;
      } else {
        totalKmContainer.textContent = `No se encontró información para el conductor ${selectedDriver}`;
        totalRutasContainer.textContent = '';
        totalViajesContainer.textContent = '';
        tarjetaContainer.innerHTML = '';
      }
    });
  })
  .catch(error => console.log(error));
