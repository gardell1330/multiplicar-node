// requireds
const fs = require('fs');

let multiplicacion = (valor, base) => {
    return valor * base;
};

let tabla = (base, limite) => {
    var data = '';
    for (var i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${multiplicacion(i, base)}\n`;
    }
    return data;
}

let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error('No es un valor valido');
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, tabla(base, limite), (err) => {
        if (err)
            throw err;
    });
    return `tabla-${base}.txt`;
};

let listarTabla = async(base, limite) => {
    return tabla(base, limite);
}

module.exports = {
    crearArchivo,
    listarTabla
}