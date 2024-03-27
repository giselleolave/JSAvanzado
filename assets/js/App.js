//Importación de clases
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./Clases.js"

// Creación de variables del front

const tablaAnimal = document.querySelector("#Animales")
const selectorAnimal = document.querySelector("#animal")
const seleccionEdad = document.querySelector("#edad")
const comentarios = document.querySelector("#comentarios")
const imagen = document.querySelector("#preview")
const formulario = document.querySelector("#formulario")

//Arreglo para traer animales
let datosAnimales = []
const url = "animales.json"
const traerAnimales = async () => {
    const response = await fetch(url)
    const datos = await response.json()
    datosAnimales = datos.animales;
}
//Función IIFE
(async () => {
    await traerAnimales();

    let seleccionTextoNombre = "";
    let seleccionTextoNombreValidar = "";
    let imagenSeleccion = "";
    let seleccionEdadValor = ""; 
    let sonidoSeleccion = "";
    //buscar el animal en los datospor su nombre
    const buscarAnimal = (nombre) => {
        return datosAnimales.find(animal => animal.name === nombre);
    };

    //seleccion del nombre del animal
    selectorAnimal.addEventListener("change", () => {
        const idNombre = selectorAnimal.selectedIndex;
        seleccionTextoNombre = selectorAnimal.options[idNombre].value;
        seleccionTextoNombreValidar = selectorAnimal.options[idNombre].text;
        imagenSeleccion = "";
        sonidoSeleccion = "";

        const animalSeleccionado = buscarAnimal(seleccionTextoNombre);
        //Si encuentra el animal trae imagen y sonido
        if (animalSeleccionado) {
            imagen.style.backgroundImage = `url(assets/imgs/${animalSeleccionado.imagen})`
            imagenSeleccion = `assets/imgs/${animalSeleccionado.imagen}`
            sonidoSeleccion = `assets/sounds/${animalSeleccionado.sonido}`
        }

    })

    // seleccion de la edad 
    
    seleccionEdad.addEventListener("change", () => {
        const IdEdad = seleccionEdad.selectedIndex
        seleccionEdadValor = seleccionEdad.options[IdEdad].text 
    })
    


    // insertar el animal en la tabla al presionar el boton
    
    let animales = []
    document.getElementById("btnRegistrar").addEventListener("click", (e) => {
        e.preventDefault();
        const comentario = comentarios.value;
        //Validaciones
        if (seleccionTextoNombreValidar === "") {
            alert("Debe seleccionar un Animal");
            return;
        }
        if (seleccionEdadValor === "") {
            alert("Debe seleccionar un rango de edad");
            return;
        }
    
        if (comentario.trim() === "") {
            alert("Debe ingresar un comentario");
            return;
        }
        //Instancia de animal
        const agregarAnimal = new Animal(seleccionTextoNombre, seleccionEdadValor, imagenSeleccion, comentario, sonidoSeleccion);
        animales.push(agregarAnimal);
        console.log(animales[animales.length - 1].sonido);

        //Se agrega instancia a la tabla junto con su sonido y con el modal al momento de dar click en la imagen
        tablaAnimal.innerHTML += `
        <div class="card mx-2" style="width: 12rem;">
            <button type="button" class="" data-bs-toggle="modal" data-bs-target="#modal${animales.length - 1}">
                <img src="${imagenSeleccion}" class="card-img-top" alt="..." style="height: 150px;">
            </button>
            <button  id="btnAudio${animales.length - 1}" onclick="playSonido('${animales[animales.length - 1].sonido}')" class="btn-sound">
                <div class="card-body">
                <p class="card-text"><i class="fa-solid fa-volume-high" style="color: white;"></i></p>
                </div>
            </button>
        </div>
        <div class="modal fade" id="modal${animales.length - 1}">
            <div class="modal-dialog modal-dialog-centered w-25" role="document">
                <div class="modal-content bg-dark">
                    <div class="modal-body text-white">
                        <img src="${imagenSeleccion}" width="100%" alt="${seleccionTextoNombre}">
                        <hr>
                        <p>Nombre: ${seleccionTextoNombre}</p>
                        <p>Edad: ${seleccionEdadValor}</p>
                        <p>Comentarios:</p>
                        <p>${comentario}</p>
                    </div>
                </div>
            </div>
        </div>
    `;  
        formulario.reset();
    });
})();
//
function playSonido(urlSonido) {

    const audio = document.getElementById(`player`);
    audio.src = urlSonido
    audio.play()
}
/* Se corrige el sonido de oso que presentaba error por nomnre con ñ*/
window.playSonido = playSonido;
