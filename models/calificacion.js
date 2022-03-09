var calificacionPiezasRomanticistas = {calificacion: 0};

module.exports = class calificacion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(calificacionPR) {
        this.calificacion = calificacionPR;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        calificacionPiezasRomanticistas = this;
        console.log(calificacionPiezasRomanticistas);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return calificacionPiezasRomanticistas;
    }

}