class ButtonHandler {
    constructor() {
        this.initEventListeners();
    }

    // Método que inicializa los eventos
    initEventListeners() {
        document.getElementById("btnIniciarSesion").addEventListener("click", () => {
            this.redirectToPage("https://juegoinicio.netlify.app"); // Ajusta la ruta según sea necesario
        });

        document.getElementById("btnCrearUsuario").addEventListener("click", () => {
            this.redirectToPage("https://juegopagprincipal.netlify.app");
        });

        document.getElementById("btnOlvidoContrasena").addEventListener("click", () => {
            this.redirectToPage("./olvido_contrasena.html");
        });
    }

    // Método para redirigir a una página
    redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
}

// Crear una instancia de la clase ButtonHandler cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    new ButtonHandler();
});

