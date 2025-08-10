const inputAmigo = document.getElementById("Amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    if (inputAmigo.value.trim() === "") {
        alert("Por favor ingrese un nombre válido.");
        return;
    }
    listaAmigos.push(inputAmigo.value.trim());
    
    ulListaAmigos.innerHTML = "";
    for (let amigo of listaAmigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    }
    inputAmigo.value = ""; // Limpiar el campo de entrada
}


function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    if (listaAmigos.length === 0) {
        ulResultado.innerHTML = "<li>Agrega al menos un amigo para sortear.</li>";
        return;
    }
    
    let idx = Math.floor(Math.random() * listaAmigos.length);
    let elegido = listaAmigos[idx];
    ulResultado.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}