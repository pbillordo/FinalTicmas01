/** defino un script para hacer visible el menu o no en dispositivos mobiles */
const barraToggle = document.querySelector(".barra-toggle"); /** selecciono el elemento del icono */
const barraMenu = document.querySelector(".barra-menu"); /** selecciono la barra */


/** quito el menu al seleccionar elemento, debe haber una forma mas "reducida" que aun no comprendo como lograr
 * ya que hago lo mismo para cada item del menu
*/

document.getElementById('item1').addEventListener('click', function(){
    barraMenu.classList.toggle("barra-menu_visible");
  })
document.getElementById('item2').addEventListener('click', function(){
    barraMenu.classList.toggle("barra-menu_visible");
})
document.getElementById('item3').addEventListener('click', function(){
    barraMenu.classList.toggle("barra-menu_visible");
})
document.getElementById('item4').addEventListener('click', function(){
    barraMenu.classList.toggle("barra-menu_visible");
})
document.getElementById('open').addEventListener('click', function(){
    barraMenu.classList.toggle("barra-menu_visible");
})





/** escucho el click sobre el icono del menu moviles añadiento o quitando
 *  una clase para visibilizarlo o no */
barraToggle.addEventListener("click", () => {
  barraMenu.classList.toggle("barra-menu_visible");

    /** cambio el aria-label de acuerdo a si el menu esta visible o no para darle accesibilidad*/
  if (barraMenu.classList.contains("barra-menu_visible")) {
    barraToggle.setAttribute("aria-label", "Cerrar menú");
  
  } else {
    barraToggle.setAttribute("aria-label", "Abrir menú");
  }
});