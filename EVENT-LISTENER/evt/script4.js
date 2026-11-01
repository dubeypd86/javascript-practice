let container = document.querySelector("#particles");

window.addEventListener("mousemove", function(dets) {

    let particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = dets.clientX + "px";
    particle.style.top = dets.clientY + "px";

    container.appendChild(particle);

    setTimeout(function() {
        particle.remove();
    }, 800);

});