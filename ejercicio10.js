
var filas = parseInt(prompt("Ingrese el número de filas: "));
var columnas = parseInt(prompt("Ingrese el número de columnas: "));

let matriz = [];
let sumaFilas = 0;
let sumaColumnas = 0;

for (var i = 0; i < filas; i++) {
    matriz[i] = [];
    for (var j = 0; j < columnas; j++) {
        matriz[i][j] = parseInt(prompt("Escriba el valor para la posición: [" + i + "][" + j + "]"));
    }
}
    document.writeln("Matriz ingresada por el usuario");
    document.writeln("<table border='1'>");
    for (var i = 0; i < filas; i++) {
        document.writeln("<tr>");
        for (var j = 0; j < columnas; j++) {
            document.writeln("<td>" + matriz[i][j] + "<td>");
        }
        document.writeln("</tr>");
    }
    document.writeln("</table>");

    for (var i = 0; i < filas; i++) {
        sumaFilas = 0;
        for (var j = 0; j < columnas; j++) {
            sumaFilas += matriz[i][j];
        }
        document.writeln("<br> La suma de las filas "+(i+1)+" es: "+sumaFilas+"<br>");
    }
    for (var j = 0; j < filas; j++) {
        sumaColumnas = 0;
        for (var i = 0; i < columnas; i++) {
            sumaColumnas += matriz[i][j];
        }
        document.writeln("<br> La suma de las columnas "+(j+1)+" es: "+sumaColumnas+"<br>");
    }