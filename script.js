document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carrusel-track");
    const items = Array.from(track.children);

    items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
});

