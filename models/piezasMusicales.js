const db = require('../util/database_labs');

module.exports = class piezasMusicales {
    constructor(nuevo_nombre, nueva_descripcion, nuevo_video){
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.video = nuevo_video;
    }
    //'INSERT INTO piezasmusicales(nombre, descripcion, video) VALUES (?,?,?)
    save() {
        return db.execute('CALL registrarPiezaMusical(?, ?, ?)', [this.nombre, this.descripcion, this.video]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM piezasmusicales');
    }

    static fetchOne(pieza_id) {
        return db.execute('SELECT * FROM piezasmusicales WHERE idPiezaMusical=?', [pieza_id]);
    }
}