const descripcion = {
  descripcion: {
  demand: true,
  alias: 'd'
  }
};

const completado = {
  completado: {
    alias: 'c',
    default: true
  }
};

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', 
    {
      descripcion
    }
  )
  .command('actualizar', 'Actualiza el estado completado de una tarea',
    {
      descripcion,
      completado
    }
  )
  .command('borrar', 'Borra la tarea que cuadre con la descripcion',
    {
      descripcion,
    }
  )
  .command('listar', 'Lista todas las tareas pendientes',
    {
      opcion: {
        alias: 'o',
        defualt: 'todos'
      }
    }
  )
  
  .help()
  .argv;

module.exports = {
  argv
}