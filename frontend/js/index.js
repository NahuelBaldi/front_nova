const contenedorTarjetas = document.getElementById("productos-container"); //Section donde se van a crear nuestros cursos. Cuales y cuantos dependen de nuestra base de datos!
const elementosPorPagina = 5; // Cantidad de "cursos" por paginación.

const prevPageButton = document.getElementById("prev-page"); // Boton paginacion
const nextPageButton = document.getElementById("next-page"); // Boton paginacion
const currentPageElement = document.getElementById("current-page"); // Página actual

let totalCursos = 0; // Variable para almacenar el total de cursos
let currentPage = 1; // Página actual
let totalPaginas = 1; // Total de páginas

// Función para cargar cursos según la página actual
function cargarCursosPorPagina() {
    // OFFSET:
    // En programación se comienza por 0, entonces si vos estas en la pagina 1 el calculo seria (1-1)*5= 0*5 =0. Entonces usas los primeros 5 cursos.
    // Si la pagina es 2: (2-1)*5=5 . Entonces tenes que usar a partir del sexto curso
    // Si la pag es 3: (3-1)*5=10 Entonces tenes que usar a partir del 11 curso
    const cantCursosEnPagina = (currentPage - 1) * elementosPorPagina;
    // Solicitud para conectar con la API falsa donde aclaras el inicio y la maxima cantidad de cursos por pagina
    fetch(`http://localhost:3000/cursos?_start=${cantCursosEnPagina}&_limit=${elementosPorPagina}`)
        .then((response) => response.json())
        .then((productos) => {
            contenedorTarjetas.innerHTML = ""; // Limpias el contenedor de cards antes de agregar los nuevos cursos.

            // Iteras a través de los cursos y crear card para cada uno.
            productos.forEach((producto) => {
                const nuevaTarjeta = document.createElement("div"); //creas un div
                nuevaTarjeta.classList = "tarjeta-producto"; // le añadis la clase

                // Le añadis información a la card
                nuevaTarjeta.innerHTML = ` 
                    <h3 class="nombre_producto">${producto.nombre}</h3>
                    <img src=${producto.img} />
                    <p class="descripcion">${producto.descripcion}</p>
                    <div class="container_precio"><p class="precio">$${producto.precio}</p></div>
                    <button class="btn_carrito"> Agregar al carrito </button>
                    <a class="ver_mas" href="../pages/curso.html">Ver más</a>
                    `;

                // Agregas la card al contenedor (visible en html)
                contenedorTarjetas.appendChild(nuevaTarjeta);

                // A cada tarjeta creada le pones un boton con la funcion de agregar al carrito (cartService.js)
                nuevaTarjeta
                    .getElementsByTagName("button")[0]
                    .addEventListener("click", () => agregarAlCarrito(producto));
            });
        })
        .catch((error) => {
            console.error("Error al obtener los datos de la API: ", error);
        });
        // Actualiza el elemento HTML que muestra la página actual. (es el span que dice pagina 1)
    currentPageElement.textContent = `Página ${currentPage}`;
}

// Función para obtener el número total de cursos y calcular el total de páginas
function obtenerTotalCursos() {
    fetch('http://localhost:3000/cursos')
        .then((response) => response.json())
        .then((cursos) => {
            totalCursos = cursos.length;
            totalPaginas = Math.ceil(totalCursos / elementosPorPagina);
            cargarCursosPorPagina();
        })
        .catch((error) => {
            console.error("Error al obtener el número total de cursos: ", error);
        });
}

// Manejadores de eventos para los botones de paginación
prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        cargarCursosPorPagina();
    }
});

nextPageButton.addEventListener("click", () => {
    if (currentPage < totalPaginas) {
        currentPage++;
        cargarCursosPorPagina();
    }
});

// Llama a la función para obtener el número total de cursos
obtenerTotalCursos();

