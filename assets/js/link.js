document.getElementById("serviciosLink").addEventListener("click", function (event) {
    if (!event.target.classList.contains("/view/serivio_ejemplo.html")) {
      window.location.href = this.href;
    }
  });

document.getElementById("HistoriasLink").addEventListener("click", function (event) {
if (!event.target.classList.contains("/view/serivio_ejemplo.html")) {
    window.location.href = this.href;
}
});