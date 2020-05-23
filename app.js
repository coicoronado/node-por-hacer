const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');
// console.log(argv);

let commando = argv._[0];

switch(commando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado(argv.opcion);
    console.log('======Por Hacer======'.green);
    for (let tarea of listado) {
      console.log(tarea.completado ? '[X]':'[ ]',
                  tarea.descripcion);
    }
    console.log('====================='.strikethrough.green);
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;  
  default:
    console.log('Comando no reqconocido');
    break;
}