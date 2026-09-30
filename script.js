const burgerTown = document.querySelectorAll(".burger-town");

burgerTown.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        console.log("¡Alguien hizo clic en BURGER TOWN!");
  });
});

const arroz = document.querySelectorAll(".arroz");

const fotoHamburguesa = document.querySelector(".foto-hamburguesa");

arroz.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    console.log("CLIC EN ARROZ");
    fotoHamburguesa.style.color = "red";
  });
});
