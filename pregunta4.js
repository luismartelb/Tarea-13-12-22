var a = new Array(10);
for (i=1;i<=10;i++){
	a[i]=Math.floor(Math.random()*100);
}
document.write("Los elementos del arreglo son:",'<BR/>');
document.write("",'<BR/>');
for (i=1;i<=10;i++) {
	document.write("Posicion ",i,": ",a[i],'<BR/>');
}
document.write("",'<BR/>');
document.write("Los elementos del arreglo en orden inverso:",'<BR/>');
document.write("",'<BR/>');
for (i=10;i>=1;i--) {
	document.write("Posicion ",i,": ",a[i],'<BR/>');
}
