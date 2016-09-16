function validateForm(){
    var x = document.getElementById("name").value;
    var d = document.getElementById("lastname").value;
    if (x, d == null || x, d == "") {
        alert("Completa los campos");
        return false;
    };
    //password
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
    var pass = document.getElementById("input-password").value;
        if(pass.length < 5 ){
            alert("Contraseña al menos de 6 caracteres");
        }else if(pass == "123456" || pass =="password" || pass == "098754"){
            alert("Por favor escriba otra contraseña");
        }
    var bici = document.getElementsByTagName("select")[0].value;
    if ( bici == 0){
            alert("Selecciona tu tipo de bici");
    }
}
/*function validateForm(){
	//validar los cinco primeros campos OBLIGATORIOS
	var validar = document.getElementsByClassName(".form-control")[0, 1, 2, 3, 4];
	if( validar == null || validar.length == 0 || /^\s+$/.test(validar)) {
  		return alert("completa los campos");
	};
	//validar nombre
	var nomUser = document.getElementById("name").value;
    if(nomUser == /^([a-z A-Z ñáéíóú]{1,60})$/i){
    	return true;
   }else if (nomUser == null || nomUser.length == 0 ||  /^\s+$/.test(nomUser)){
   	return alert("ingrese un nombre valido");
  	};


};*/
/*
function validateForm(){
	//Escribe tú código aquí
	var nombre = document.getElementById("name").value;
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
  		return alert("ingrese su nombre");
	};

	var contraseña = document.getElementById("input-password").value;
	if( contraseña == "password" || contraseña == 123456 || contraseña == 098754 || contraseña.length == 5 || /^\s+$/.test(contraseña) ) {
  		return alert("ingrese otra contraseña");
	};	
};
*/

/*
//ANABEL
function validateForm(){
	//validar los cinco primeros campos OBLIGATORIOS
	var validate = document.getElementsByClassName(".form-control")[0, 1, 2, 3, 4];
	if( validate == null || validate.length == 0) {
  		return alert("completa los campos");
	};

//contraseña
	var contraseña = document.getElementById("input-password");
	if( contraseña == "password" || contraseña == 123456 || contraseña == 098754 || contraseña.length < 6 || /^\s+$/.test(contraseña) ) {
  		return alert("ingrese otra contraseña");
	};

//E-mail
//	document.getElementsByClassName("form-control")[2].placeholder = 'Ejmp: nombre@direccion.com';	
/*
	var nom = document.getElementById("input-password").value;
    if (isNaN(nom) || nom == "password" || nom == 123456 || nom == 098754 || nom.length > 5 ) {
      window.alert ("No Válido") ;
    } else {
        return true;
    }
	*/
//};

/* //valifate por separado
	var nombre = document.getElementsByClassName(".form-control")[0];
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		return alert("completa los campos");
	};
	var apellido = document.getElementsByClassName(".form-control")[1];
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
  		return alert("completa los campos");
	};
	var email = document.getElementsByClassName(".form-control")[2];
	if( email == null || email.length == 0 || /^\s+$/.test(email)) {
  		return alert("completa los campos");
	};
	var contraseña = document.getElementsByClassName(".form-control")[3];
	if( contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
  		return alert("completa los campos");
	};
	var bici = document.getElementsByClassName(".form-control")[4];
	if( bici == null || bici.length == 0 || /^\s+$/.test(bici)) {
  		return alert("completa los campos");
	};
*/





