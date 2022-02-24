let input_password = document.getElementById("password");

function verificarPassword(contrasenia) {
    let passwordString = contrasenia.toString();
    let length = contrasenia.length;
    let passwordUppercaseChar = passwordString.replace(/[^A-Z]/g,"");
    let passwordLowercaseChar = passwordString.replace(/[^a-z]/g,"");
    let passwordNumbers = passwordString.replace(/[^0-9]/g,"");
    let passwordSymbols = passwordString.replace(/[^`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,"");

    let casosVerificacion = "";
    let flag = true;

    if (passwordString.length == 0) {
        alert("El campo de verificar la contraseña está vacío");
        return casosVerificacion = "";
    }

    if (passwordString.length < 8){
        casosVerificacion += "-La contraseña tiene menos de 8 caracteres <br>";
        flag = false;
    }
    if (passwordUppercaseChar.length < 1) {
        casosVerificacion += "-La contraseña no tiene letras mayúsculas <br>";
        flag = false;
    }
    if (passwordLowercaseChar.length < 1) {
        casosVerificacion += "-La contraseña no tiene letras minúsculas <br>";
        flag = false;
    }
    if (passwordNumbers.length < 1){
        casosVerificacion += "-La contraseña no tiene numeros <br>";
        flag = false;
    }
    if (passwordSymbols.length < 1){
        casosVerificacion += "-La contraseña no tiene símbolos <br>";
        flag = false;
    } 
    if (flag == true){
        casosVerificacion += "La contraseña es segura";
    }

    return casosVerificacion;
}

boton_verificar.onclick = () => {
    let boton_verificar = document.getElementById("verificacion");

    boton_verificar.innerHTML = verificarPassword(input_password.value);
    
}

validar_passwords.onmouseover = () => {
    let boton_verificar = document.getElementById("boton_verificar");

    boton_verificar.innerHTML = '<p class="p1"> Verificar contraseña </p>';
}

validar_passwords.onmouseout = () => {
    let boton_verificar = document.getElementById("boton_verificar");

    boton_verificar.innerHTML = "Verificar contraseña";
}