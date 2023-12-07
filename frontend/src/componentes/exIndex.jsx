// Controlador de la visibilidad  de formularios en el Home

const login = document.getElementById("login")
const container_sesion = document.getElementById("container_sesion")
const fondo = document.getElementById("container_home")
const nav = document.getElementById("container_list")
const cerrar = document.getElementById("btn_cerrar")
const btn_registro_home = document.getElementById("btn_registro")
const container_registro = document.getElementById("container_registro")
const cerrar_registro = document.getElementById("btn_cerrar_registro")
const redd_registro = document.getElementById("redd_registro")
const redd_inicio = document.getElementById("redd_inicio")
const hover = document.getElementById("submenu")
const form_registro = document.getElementById("form_registro")

const scrollToTopButton = document.getElementById('scrollToTopButton');


//botón
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
});


// -------------------------
// Funcionalidad de formularios de inicio de sesion y registro
const btn_inicio = document.getElementById("btn_inicio")
const container_btn_registro = document.getElementById("container_btn_registro")

const icon_cart = document.getElementById("icon_cart")
const icon_user = document.getElementById("icon_user")
const btn_cerrar = document.getElementById("btn_cerrar_sesion")

btn_inicio.addEventListener("click", (e) => {
    e.preventDefault()
    let usuariosGet = localStorage.getItem("u_registrados");
    let u_registrados = JSON.parse(usuariosGet) || [];

    let email = document.getElementById('email').value
    let contraseña = document.getElementById('password').value

    let coincidencia = false;

    for (let i = 0; i < u_registrados.length; i++) {
        if (u_registrados[i].email == email) {
            if (u_registrados[i].contraseña == contraseña) {
                coincidencia = true;
            }
        }
    }
    if (coincidencia == true) {
        login.style.display = "none"
        container_btn_registro.style.display = "none"
        container_sesion.style.display = 'none';
        fondo.style.display = 'flex'
        hover.style.display = 'flex'
        icon_cart.style.display = 'block'
        icon_user.style.display = 'block'
        // alert("Incio de sesion con exito")

    }
    else {
        alert("Usuario no registrado")
    }




    btn_cerrar.addEventListener("click", (e) => {
        e.preventDefault()

        icon_cart.style.display = 'none'
        icon_user.style.display = 'none'
        container_btn_registro.style.display = 'flex'
        container_btn_registro.style = 'justify-content=center'
        login.style.display = 'flex'
        form_inicio.reset()
    })




    const btn_registrarse = document.getElementById("btn_registrarse")
    const form_inicio = document.getElementById("form_inicio")

    btn_registrarse.addEventListener("click", (e) => {
        e.preventDefault()

        let user_name = document.getElementById('user_name_registro').value;
        let email = document.getElementById('email_registro').value;
        let password = document.getElementById('password_registro').value;

        let usuarios = JSON.parse(localStorage.getItem("u_registrados")) || [];

        if (user_name != "" && password != "" && email != "") {
            let usuario = {
                usuario: user_name,
                email: email,
                contraseña: password,
            }
            usuarios.push(usuario);
            let u_registrados_json = JSON.stringify(usuarios);
            localStorage.setItem("u_registrados", u_registrados_json);

            container_registro.style.display = 'none'
            fondo.style.display = 'flex'
            hover.style.display = 'flex'
            alert("Usuario registrado con exito!");
            form_registro.reset()

        }
        else {
            alert("Datos no validos")
        }
    })

})

