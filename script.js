
const cuerpoPagina = document.querySelector ("body");
const titulo = document.querySelector ("#titulo");
const imagen = document.querySelector ("#imagen");
const enlace = document.querySelector ("#enlace");
const h2NombreUsuario = document.querySelector ("#nombre-usuario");

const FONDO_COLOR_1 = "orange";
const FONDO_COLOR_2 = "black";
const FONDO_COLOR_3 = "pink";

const IMG_1 = "https://www.miwuki.com/wp-content/uploads/2016/11/gatito-830x623.jpg";
const IMG_2 = "https://cdn.myanimelist.net/images/about_me/ranking_items/5988102-ff1ec9da-94af-4fda-8473-a2d6b8bda24f.jpg?t=1678729233";
const IMG_3 = "https://oracle-devrel.github.io/devo-image-repository/seo-thumbnails/JavaScript---Thumbnail-1200-x-630.jpg";

const IMG_TAM_1 = "200px";
const IMG_TAM_2 = "300px";
const IMG_TAM_3 = "450px";

const TXT_TAM_1 = "15px";
const TXT_TAM_2 = "20px";
const TXT_TAM_3 = "30px";

const TXT_FUENTE_1 = "monospace";
const TXT_FUENTE_2 = "cursive";
const TXT_FUENTE_3 = "fantasy";

const TXT_COLOR_1 = "black";
const TXT_COLOR_2 = "white";
const TXT_COLOR_3 = "green";

const TXT_COLOR_USUARIO_1 = "red";
const TXT_COLOR_USUARIO_2 = "violet";
const TXT_COLOR_USUARIO_3 = "white";

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/";
const ENLACE_2 = "https://discord.com/";
const ENLACE_3 = "https://es.stackoverflow.com/";

let nombreRecibido =prompt ("Ingrese su nombre")
let infoRecibida = prompt (" seleccionar numero 1,2,3");

h2NombreUsuario.innerHTML =nombreRecibido;

function modificarPagina (colorFondo,textoTamaño,textoFuente,textoColor,imgEnlace,imgAncho,enlacePagina,enlaceTexto,txtColorUsuario){

    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.fontStyle = textoTamaño;
    cuerpoPagina.style.fontFamily = textoFuente;
    titulo.style.color= textoColor;
    imagen.src = imgEnlace;
    imagen.style.width = imgAncho;
    enlace.href = enlacePagina;
    enlace.innerHTML= enlaceTexto;
    h2NombreUsuario.style.color = txtColorUsuario;

}

if (infoRecibida == 1) {
    modificarPagina (FONDO_COLOR_1,TXT_TAM_1,TXT_FUENTE_1,TXT_COLOR_1,IMG_1,IMG_TAM_1,ENLACE_1,"Trayecto de Programador",TXT_COLOR_USUARIO_1);
} else if( infoRecibida == 2) {
    modificarPagina (FONDO_COLOR_2,TXT_TAM_2,TXT_FUENTE_2,TXT_COLOR_2,IMG_2,IMG_TAM_2,ENLACE_2, "Discord Sitio Oficial", TXT_COLOR_USUARIO_2);
}else{
    modificarPagina (FONDO_COLOR_3,TXT_TAM_3, TXT_FUENTE_3, TXT_COLOR_3, IMG_3,IMG_TAM_3, ENLACE_3, "OverFlow",TXT_COLOR_USUARIO_3);
}
