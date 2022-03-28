const db = require('../util/databaselab17');

module.exports = class piezasMusicales {
    constructor(nuevo_nombre, nueva_descripcion, nuevo_video){
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.video = nuevo_video;
    }

    save() {
        return db.execute('INSERT INTO piezasmusicales(nombre, descripcion, video) VALUES (?,?,?)', [this.nombre, this.descripcion, this.video]);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM piezasmusicales');
    }
}