const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla correspondiente', opts)
    .command('crear', 'Crea un file de la tabla correspondiente', opts)
    .help()
    .argv;

module.exports = {
    argv
}