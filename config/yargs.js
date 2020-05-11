const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}