/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from "./lazy";

/*crear 1 imagen*/
/*agregar imagen*/

/*  <div class="p-4">
        <img class="mx-auto" width="320" src="https://randomfox.ca/images/16.jpg" alt="">
    </div>*/

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum //multiplicar el resultado por un N°max y N°min

const createImageNode = () => { //funcion de darme un nodo de imagen 

    const container = document.createElement('div') //creamos el div padre 
    container.className = "p-4" //propiedad que tiene una clase y la clase

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen); //contenedor agrega la imagen creada

    return container;
};
const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('button'); //seleccionamos el button

const addImage = () => { //accion para cambiar de imagen al oprimir el button
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}
addButton.addEventListener('click', addImage);
