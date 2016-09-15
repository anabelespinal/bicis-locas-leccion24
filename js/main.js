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
};







