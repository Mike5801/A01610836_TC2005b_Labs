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

    static busquedaCanciones(criterio) {
        return db.execute('SELECT * FROM piezasmusicales WHERE nombre LIKE ? OR descripcion LIKE ?', ['%'+criterio+'%', '%'+criterio+'%']);
    }

    static registrarComentario(comentario) {
        return db.execute('INSERT INTO comentarios(descripcion) VALUES (?)', [comentario]);
    }
    static verComentarios() {
        return db.execute('SELECT descripcion FROM comentarios');
    }

    static buscarComentarios(criterio) {
        return db.execute('SELECT descripcion FROM comentarios WHERE descripcion LIKE ?', ['%'+criterio+'%']);
    }

    static registrarComentarioPM (id, comentario) {
        return db.execute('UPDATE piezasmusicales SET comentario = ? WHERE idPiezaMusical = ?', [comentario, id]);
    }
}