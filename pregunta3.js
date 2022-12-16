function saludar() {
	document.write("Hola mundo!",'<BR/>');
}
function calculardoble(num) {
	var res;
	res = num*2;
	return res;
}
function triplicar(num) {
	var res2;
	res2 = num*3;
	return res2;
}
var x;
document.write("Llamadando a la funcion Saludar: ",'<BR/>');
saludar();
x = prompt("Ingrese un valor numerico para x: ");
document.write("Llamada a la funcion CalcularDoble (pasaje por valor) ",'<BR/>');
document.write("El doble de ",x," es ",calculardoble(x),'<BR/>');
document.write("El valor original de x es ",x,'<BR/>');
document.write("Llamada a la funcion Triplicar (pasaje por referencia) ",triplicar(x),'<BR/>');
document.write("El nuevo valor de x es ",x,'<BR/>');