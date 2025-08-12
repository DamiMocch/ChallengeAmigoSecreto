// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
let amigos = [];
let amigoSecreto = "";
let verificarAmigos = amigos.length > 0;



// Captura el valor del campo

   function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;


    // verificar si esta vacio 
    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre.");

    } else {
        amigos.push(nombreAmigo);
        console.log("Lista de amigos:", amigos);
        document.getElementById("amigo").value = "";
        // Lllamos a la función para actualizar la lista
        mostrarAmigos();
    }
   }

   function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista
    lista.innerHTML = "";

    // Recorremos el array y creamos los li para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        // apendChild hace que agregue mi li dentro del ul 
        lista.appendChild(li);
        
    }
    
   }

    // Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

    function sortearAmigo() {

        // Validamos que haya amigos en el array
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }
        
        // Generamos un indice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtenemos el nombre sorteado 
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostramos el resuktado en el elemento con id 
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }

