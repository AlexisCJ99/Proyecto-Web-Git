// script.js
document.addEventListener('DOMContentLoaded', () => {
    loadCotizaciones();
});

function cotizar() {
    // Obtener valores del formulario
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const hotel = document.getElementById('hotel').value;
    const departure = document.getElementById('departure').value;
    const rooms = document.getElementById('rooms').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Precios ficticios por habitación/persona (puedes ajustar estos valores)
    const pricePerRoom = 100;
    const pricePerAdult = 50;
    const pricePerChild = 25;

    // Calcular precios
    const hotelPrice = rooms * pricePerRoom;
    const triplePrice = (rooms * pricePerRoom) + (adults * pricePerAdult);
    const doublePrice = (rooms * pricePerRoom) + (adults * pricePerAdult);
    const singlePrice = (rooms * pricePerRoom);
    const childrenPrice = children * pricePerChild;

    // Mostrar precios en la tabla
    document.getElementById('hotel-price').innerText = `$${hotelPrice}`;
    document.getElementById('triple-price').innerText = `$${triplePrice}`;
    document.getElementById('double-price').innerText = `$${doublePrice}`;
    document.getElementById('single-price').innerText = `$${singlePrice}`;
    document.getElementById('children-price').innerText = `$${childrenPrice}`;

    // Guardar los datos en LocalStorage
    const cotizacion = {
        startDate,
        endDate,
        hotel,
        departure,
        rooms,
        adults,
        children,
        hotelPrice,
        triplePrice,
        doublePrice,
        singlePrice,
        childrenPrice
    };

    let cotizaciones = localStorage.getItem('cotizaciones');
    if (!cotizaciones) {
        cotizaciones = [];
    } else {
        cotizaciones = JSON.parse(cotizaciones);
    }

    cotizaciones.push(cotizacion);
    localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));

    console.log('Cotización guardada:', cotizacion);

    // Recargar la tabla de cotizaciones
    loadCotizaciones();
}

function loadCotizaciones() {
    const cotizaciones = JSON.parse(localStorage.getItem('cotizaciones')) || [];
    const tableBody = document.querySelector('#cotizacionesTable tbody');
    tableBody.innerHTML = '';

    cotizaciones.forEach(cotizacion => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cotizacion.startDate} - ${cotizacion.endDate}</td>
            <td>${cotizacion.hotel}</td>
            <td>${cotizacion.departure}</td>
            <td>${cotizacion.rooms}</td>
            <td>${cotizacion.adults}</td>
            <td>${cotizacion.children}</td>
            <td>$${cotizacion.hotelPrice}</td>
            <td>$${cotizacion.triplePrice}</td>
            <td>$${cotizacion.doublePrice}</td>
            <td>$${cotizacion.singlePrice}</td>
            <td>$${cotizacion.childrenPrice}</td>
        `;
        tableBody.appendChild(row);
    });
}

function clearCotizaciones() {
    localStorage.removeItem('cotizaciones');
    loadCotizaciones();
    console.log('Todas las cotizaciones han sido eliminadas.');
}