document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carrusel-track");
    const items = Array.from(track.children);

    items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // Seleccionar TODOS los elementos a animar
    const aboutTitles = document.querySelectorAll('.about-title');
    const avatar = document.querySelector('.avatar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         entry.target.classList.add('animate');
         observer.unobserve(entry.target); // Evita que la animación se repita
      }
    });
    }, { threshold: 0.6 });

    // Observar títulos y avatar
    aboutTitles.forEach(title => observer.observe(title));
    observer.observe(avatar);

    function mostrarImagen(rutaImagen, cardElement) {  
    // Cambiar la imagen de la parte inferior  
    const imagenBaja = document.getElementById('imagen-baja');  
    imagenBaja.src = rutaImagen;  
    imagenBaja.style.display = "block"; // Hacer visible la imagen  

    // Aplicar la inclinación a la imagen anterior  
    cardElement.querySelector('.character').classList.toggle('inclinada');  
}  
});



