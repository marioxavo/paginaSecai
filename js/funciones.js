function verificarTelefono(){
    var numeroTelefono=document.getElementById("telefono").value;
    var expresionRegular1=/^[0-9]{9}$/;//<--- con esto vamos a validar el numero
    var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco

    if(numeroTelefono==""){
        document.getElementById("telefono").value = "Campo obligatorio";
        return false;
    }

    else if(expresionRegular2.test(numeroTelefono)){
        document.getElementById("telefono").value = "Número sin espacios por favor";
        return false;
    }

    else if(!expresionRegular1.test(numeroTelefono)){
        document.getElementById("telefono").value = "numero incorrecto";
        return false;
    }
    return true;

}

function verificarEmail() {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(document.getElementById("email").value==""){
        document.getElementById("email").value = "Campo obligatorio";
        return false;
    }
    if ( !expr.test(document.getElementById("email").value) ){
        document.getElementById("email").value= "Email incorrecto";
        return false;
    }

    return true;
}

function verificarForm(){



    formOK=true;

    if(verificarTelefono() == false)
        formOK=false;
    if(verificarEmail() == false)
        formOK=false;


    return formOK;
}