/* CODIGO DE LA VENTANA MODAL DE CONTACTO Y EL FORMULARIO */

/* capturo los elementos del html que necesito */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const cerrar = document.getElementById('cerrar');

/* alterno la vista de la ventana agregando o quitando una clase que la oculta o la muestra
cambiando la opacidad */
open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});




/*la validacion me dio trabajo no encontraba la expresion correcta y aun no se si lo es
realizo la validacion manualmente para evitar el mensaje de validacion del navegador 
cuando salgo sin mandar mensaje*/

function validacion(){
    inputcorreo = document.getElementById("correo").value;
    var emailvalido = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    if( inputcorreo == null || inputcorreo.length == 0 || !emailvalido.exec(inputcorreo) ) {
        alert("No se realizará ningun envío.\nAl menos el Correo es requerido \nO no tiene el formato correcto");
    return false;
    }else{
        return true;
    }
    }
    /** capturo el formulario */
        const $form = document.querySelector('#form');
        
        /* capturo el evento que envia la info en el formulario*/
        $form.addEventListener('submit', FuncionSend)
        /* utilizando una funcion para enviar
        como no tengo un "servidor" que me escuche utilizo el cliente de correo del dispositivo a traves de
        un mailto oculto*/

        /** oculto la ventana luego de que se envie el mensaje o se salga por cerrar*/
        close.addEventListener('click', () => {
        modal_container.classList.remove('show');});
            
        cerrar.addEventListener('click', () => {
            modal_container.classList.remove('show');});
   
/* capturo el formulario de la ventana y paso sus datos a otro que utilizo para enviarlos
si hay una mejor manera no lo se
el formulario se envia solo si se valida que al menos el correo este completo*/

    

/* Funcion que envia los datos del formulario previa validacion*/
    function FuncionSend(event) {
        if (validacion()){
        event.preventDefault()  /*evito que la pagina se recargue*/
        const contenform = new FormData(this) /* paso los datos del form de la pagina a otro el "this" hace referencia al form del evento submit*/
        const $buttonMailto = document.querySelector('#enviar') /* capturo el dato oculto de destinatario */
        /* actualizo con los datos capturados los atributos del mailto oculto
        y simulo un click sobre este elemento que hace el envio */
        $buttonMailto.setAttribute('href', `mailto:gmarinoc@email.com?subject=Mensaje desde mi CV - NOMBRE:
        ${contenform.get('name')} CORREO:   ${contenform.get('email')}&body=${contenform.get('message')}`)
        $buttonMailto.click()
        /* limpio el formulario cuando lo envio por las dudas se desee mandar mensaje con otro contacto distinto */
        document.getElementById('form').reset(); 
        /* cierro la ventana*/
        
        }
    }


