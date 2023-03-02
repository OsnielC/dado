function lanzarDado() {
    var numLanzamientos = document.getElementById("num-lanzamientos").value;
    var tablaResultados = document.getElementById("tabla-resultados").getElementsByTagName("tbody")[0];
    tablaResultados.innerHTML = "";

    for (var i = 1; i <= numLanzamientos; i++) {
        var valor = Math.random();
        valor = valor.toFixed(2);
        var fila = tablaResultados.insertRow(-1);
        var celdaLanzamiento = fila.insertCell(0);
        var celdaValor = fila.insertCell(1);
        celdaLanzamiento.innerHTML = i;
        celdaValor.innerHTML = valor;

        let celdarn6 = fila.insertCell(2);
        let rn6 = valor  *6
        rn6 = rn6.toFixed(2)
        celdarn6.innerHTML = rn6;

        let celdaIntRn6 = fila.insertCell(3);
        let intRn6 = Math.trunc(rn6);
        celdaIntRn6.innerHTML = intRn6;

        let celdaIntRn6Plus = fila.insertCell(4);
        let intRn6Plus = Math.trunc(rn6) +1;
        celdaIntRn6Plus.innerHTML = intRn6Plus;
    }
}