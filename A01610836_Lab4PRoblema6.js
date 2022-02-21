function imprimirTiempoReciente(){
    document.write("Hora actual: " + this.hours + "h " + this.minutes + "m<br>");
}

function calcularTiempoRestanteMinutos(){
    let auxHours = this.hours;
    let auxMinutes =  this.minutes;
    let auxTotMin = 1440 - (auxHours*60 + auxMinutes);
    document.write("Tiempo restante para año nuevo: " + auxTotMin + " minutos");
}

function tiempoAntesAnioNuevo (horas, minutos) {
    this.hours = horas;
    this.minutes = minutos;
    this.printRecentTime = imprimirTiempoReciente;
    this.calculateTimeLeftMinutes = calcularTiempoRestanteMinutos;
}



tiempo1 = new tiempoAntesAnioNuevo(4,20);
tiempo1.printRecentTime();
tiempo1.calculateTimeLeftMinutes();