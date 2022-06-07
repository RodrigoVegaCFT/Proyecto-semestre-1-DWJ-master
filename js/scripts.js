// hacer script donde al variar entre 1 opcion u otra se ajuste el precio total


// primero se validaran los formularios con cantidad siendo el min 1 y el maximo 15.
function valida_envia(){
    //valido el nombre
    if (document.formva.cantidad.value<15){
           alert("Debe seleccionar un valor menor o igual a 15")
           document.formva.cantidad.focus()
           return 0;
    }
}


//aqui iran la validaciones para pagos, rut : 8=<>10  , Nombre completo: max 50 caracteres si y mas de 10 caracteres, telefono: verificar que sea numero ingresado debe ser =9
// en email verificar que tenga el @ y maximo de 40 caracteres min de 10


// cuando se verifique que todo este en orden mostrar alerta que el pedido fue completado con exito a nombre de:atatatat, Telefono:959595959

//links utilidad
//https://desarrolloweb.com/articulos/1767.php
//https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#validar_formularios_utilizando_javascript
//https://www.w3schools.com/js/js_htmldom_methods.asp
