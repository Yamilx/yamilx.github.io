// Cargar el archivo menu.html en el div con id 'menu-responsive'
fetch('/view/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-responsive').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el menú:', error));

// Cargar el archivo fin.html en el div con id 'fin-responsive'
fetch('/view/fin.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('fin-responsive').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el archivo fin:', error));

  // Cargar el archivo color.html en el div con id 'color'
fetch('/view/color.html')
.then(response => response.text())
.then(data => {
  document.getElementById('color').innerHTML = data;
})
.catch(error => console.error('Error al cargar el archivo fin:', error));

// Cargar el archivo iconos.html en el div con id 'iconos'
fetch('/view/iconos.html')
.then(response => response.text())
.then(data => {
  document.getElementById('iconos').innerHTML = data;
})
.catch(error => console.error('Error al cargar el archivo fin:', error));

// Cargar el archivo script.html en el div con id 'script'
fetch('/view/comandos.html')
.then(response => response.text())
.then(data => {
  document.getElementById('comandos').innerHTML = data;
})
.catch(error => console.error('Error al cargar el archivo fin:', error));
  