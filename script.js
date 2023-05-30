function showAlert() {
    alert('¡Hola!, accede a más información aquí');
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").
        classList.toggle("nav-links-responsive")
                  
              
    })