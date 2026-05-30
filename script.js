function moverCarrusel(direccion) {
    const carrusel = document.getElementById('carrusel');
    carrusel.scrollBy({ left: direccion * 1515, behavior: 'smooth' });
}
