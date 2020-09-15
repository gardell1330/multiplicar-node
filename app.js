// requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}