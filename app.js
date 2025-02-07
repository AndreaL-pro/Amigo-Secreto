console.log(amigos.length);
// Array que almacenará los nombres de los amigos ingresados
let amigos = ["Arrieta", "Sofi", "Olga", "Leo"];

// Referencias 
const inputAmigo = document.getElementById("nombreAmigo");
const botonAgregar = document.getElementById("agregarAmigo");
const listaAmigos = document.getElementById("listaAmigos");

// Función para actualizar referencias con la lista de amigos
function actualizarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpiar la lista 
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Agregar un nuevo amigo
botonAgregar.addEventListener("click", () => {
    const nuevoAmigo = inputAmigo.value.trim(); // Capturar y limpiar espacios

    // Validar que el campo no está vacío
    if (nuevoAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si no hay un nombre válido
    }

    // Agregar el nuevo amigo al arreglo
    amigos.push(nuevoAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualiza la lista de amigos en el DOM
    actualizarListaAmigos();
});

// Iniciar la lista de amigos al cargar la página
actualizarListaAmigos();
