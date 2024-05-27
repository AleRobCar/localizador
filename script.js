// Obtener la hora actual
function actualizarHora() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

// Obtener la ubicación actual
function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
    } else {
        mostrarError("Geolocalización no disponible");
    }
}

// Mostrar la ubicación en la página
function mostrarUbicacion(posicion) {
    const latitud = posicion.coords.latitude.toFixed(4);
    const longitud = posicion.coords.longitude.toFixed(4);

    document.getElementById('latitud').textContent = latitud;
    document.getElementById('longitud').textContent = longitud;
}

// Mostrar error de ubicación
function mostrarError(error) {
    console.error(error);
    document.getElementById('latitud').textContent = "Error";
    document.getElementById('longitud').textContent = "Error";
}

// Obtener la ubicación al cargar la página
obtenerUbicacion();
