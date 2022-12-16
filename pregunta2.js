var acum, dato, i, n, promedio;
n=Number(prompt("Ingrese la cantidad de datos: "));
acum = 0;
for(i=1;i<=n;i++) {
	dato = Number(prompt("Ingrese el dato:"));
	document.write("El dato ",i," es = ",dato,"<br>")
	acum=acum+dato;
}
promedio=acum/n;
document.write("El promedio es: ",promedio);