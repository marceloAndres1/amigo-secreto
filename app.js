let listaAmigos = [];




function agregarAmigo(){
    //Obtener el valor del campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    // 2. Validar que no esté vacío
    if (nombreAmigo == "") {
        alert("Por favor,  ingrese un nombre");
        return;
    }
    
    // 3. Agregar el nombre al arreglo
    listaAmigos.push(nombreAmigo);
    // 4. Actualizar la lista en la página
    const listaAmigosHTML = document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML = "";

    // Recorrer el arreglo y agregar cada nombre a la lista HTML
    listaAmigos.forEach((amigo) => {
    const itemLista = document.createElement("li");// Crea un nuevo elemento <li>
    itemLista.textContent = amigo;

    listaAmigosHTML.appendChild(itemLista);// Asigna el nombre del amigo al contenido del <li>




    });

    inputAmigo.value = "";//vacia el campo de texto para que el usaurio pueda ingresar otro nombre






    
}

//Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista, agrega algunos nombres primero");
        return;
    }

    //seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];// Obtiene el nombre correspondiente al índice aleatorio

    //mostrando el resultado en la pagina
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>EL AMIGO SECRETO ES: ${amigoSecreto}</li>`;

  
}







