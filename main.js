// Defino el contenedor HTML en donde colocaré los datos a cargar dinamicamente.
let tagTBody = document.querySelector("#listaComentarios tbody");
// indicando la direccion donde esta mi API
let pUrl = "https://my-json-server.typicode.com/CarlosBone-png/Bones-FakeApi/comentarios";


//console.log(tagTBody);

//Consultar los datos usando el FETCH API

//fetch('http://127.0.0.1:5500/datos/comments.json',
fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

    /*
    let listaComentario = data.comentarios;
    console.log(data.comentarios)
    */
   let listaComentario = data;

    listaComentario.forEach(element => {
        // Crear los objetos filas y columnas de la tabla con el DOM HTML
        let tagFila = document.createElement("tr");
        let tagID = document.createElement("td");
        let tagNombre = document.createElement("td");
        let tagPlazo = document.createElement("td");
        let tagAnualidad = document.createElement("td");

        tagFila.setAttribute("id", element.id);
        tagID.innerHTML = element.id;
        tagNombre.innerHTML = element.nombre;
        tagPlazo.innerHTML = element.plazo;
        tagAnualidad.innerHTML = element.anualidad;

        // Agrego los objetos DOM HTML a su contenedor
        tagFila.appendChild(tagID);
        tagFila.appendChild(tagNombre);
        tagFila.appendChild(tagPlazo);
        tagFila.appendChild(tagAnualidad);

        tagTBody.appendChild(tagFila);

        // Programar el evento onclick de la fila
        tagFila.onclick = function (e){
            let container = e.target.parentElement;
           // console.log (e.target);
           //console.log(container);
           //console.log (container.id);
           // Fecth consultando un solo elemento
           let urlNew = pUrl + "/"+ container.id;
           fetch (urlNew)
           .then (resp => resp.json())
           .then (datos => {
               console.log (datos);
           });
        }        
    });        
    }     
     ); 

     
