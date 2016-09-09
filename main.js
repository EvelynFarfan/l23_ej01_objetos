window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var nombre =document.getElementById("nombre").value;		
		var edad = parseInt(document.getElementById('edad').value);
		var genero =document.getElementById("genero").value;
		Persona(nombre, edad,genero);
		function Persona(nombre,edad,genero){
			this.nombre = nombre;
			this.edad = edad;
			this.gerero = genero;
			this.mayorDeEdad = (this.edad >= 18);
			this.presetancion = function(){
				// return "soy" + ((this.mayorDeEdad) ? "mayor" : "menor") + "de edad"
		 		if(this.mayorDeEdad){
					return "Hola mi nombre es " + this.nombre + " tengo " + this.edad + " años y soy mayor de edad."
				}else{
					return "Hola mi nombre es " + this.nombre + " tengo " + this.edad + " años y soy menor de edad."
				}
			}
		}
		var persona1 = new Persona (nombre, edad, genero);
		document.getElementById("resultado").innerHTML= persona1.presetancion();
	});
});
