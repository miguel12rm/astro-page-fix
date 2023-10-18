

/*export function Scroll_btonEvent(){*/
    const header = document.querySelector("#header")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /*const btnEntrar = document.querySelector("#btn-entrar")

    btnEntrar.addEventListener("click", (e) => {
        // Comprobamos si el usuario está conectado
        const estaConectado=estaConectado();
        if (estaConectado()) {
            // El usuario está conectado, mostramos su nombre
            const nombreUsuario = localStorage.getItem("nombreUsuario");
            e.target.innerHTML = nombreUsuario;
        } else {
            // El usuario no está conectado, redirigimos al portal de inicio de sesión
            window.location.href = "../../pages/login";
        }
    });*/
/*}*/