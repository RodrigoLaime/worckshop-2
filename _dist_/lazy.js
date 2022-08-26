

const isIntersecting = (entry) => {
    return entry.isIntersecting; //sera true dentro de la pantalla y falso si no
};

const accion = () => {
    console.log("holis");
};

 const obser = new IntersectionObserver ((entries) => {
    entries.filter(isIntersecting) //solamente las imagenes que se estan intersectando
    .forEach(accion); //por cada uno de los elementos que ya se encuentran en la pantala, realizar una accion
 });
//
export const registerImage = (imagen) => {
    //intersection observator -> observer(image)
    observer.observe(imagen);
}