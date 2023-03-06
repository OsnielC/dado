function lanzarDado() {
    const numLanzamientos = parseInt(document.getElementById("num-lanzamientos").value);
    const tablaResultados = document.getElementById("tabla-resultados").getElementsByTagName("tbody")[0];
    tablaResultados.innerHTML = "";

    let sumatoria = 0;
    let valores = [];

    for (let i = 1; i <= numLanzamientos; i++) {
        const valor = Math.random();
        const rn6 = (valor * 6).toFixed(2);
        const intRn6 = Math.floor(rn6);
        const intRn6Plus = intRn6 + 1;
        valores.push(rn6);
        sumatoria += parseFloat(rn6);

        const fila = tablaResultados.insertRow();
        fila.insertCell().textContent = i;
        fila.insertCell().textContent = valor.toFixed(2);
        fila.insertCell().textContent = rn6;
        fila.insertCell().textContent = intRn6;
        fila.insertCell().textContent = intRn6Plus;
    }

    const media = (sumatoria / numLanzamientos).toFixed(2);
    let sumatoriaVarianza = 0;

    for (let i = 0; i < valores.length; i++) {
        sumatoriaVarianza += Math.pow((valores[i] - media), 2);
    }

    const varianza = (sumatoriaVarianza / numLanzamientos).toFixed(2);

    document.getElementById("promedio").textContent = "Promedio: "+ media;
    document.getElementById("varianza").textContent = "Varianza: " + varianza;
}