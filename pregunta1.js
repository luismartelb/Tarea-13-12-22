let valor=true;
while (valor){
op=Number(prompt("Menu de recomendaciones \n 1. Literatura \n 2. Cine \n 3. Salir \n Elija una opcion (1-3): "));
switch (op) {
	case 1:
			alert("Lecturas recomendables: \n  + Esperandolo a Tito y otros cuentos de fubol (Eduardo Sacheri)");
			break;
	case 2:
			alert("Peliculas recomendables: \n + Jocker ");
			break;
	case 3:
			alert("Gracias, vuelva pronto");
			valor=false
			break;
	default:
			alert("Opcion no valida \n Eliga otra opcion ");
			break;
	}
}