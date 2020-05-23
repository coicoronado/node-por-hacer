const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarDB();

  return porHacer;
};

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./db/data.json', data, (err) => {
    if (err)
      console.log(err);
    else 
      console.log('el archivo fue creado');
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json')
  } catch(err) {
    listadoPorHacer = [];
  }
};

const getListado = (opcion) => {
  cargarDB();
  let result = listadoPorHacer;
  if (listadoPorHacer.length) {
    switch (opcion) {
      case 'terminados':
        result = listadoPorHacer.filter((entry) => {
          return entry.completado
        });
        break;
      case 'pendientes':
        result = listadoPorHacer.filter((entry) => {
          return !entry.completado
        });
        break;
      default:
        result = result;
        break;
    }
  }
  return result;
};

const actualizar = (descripcion, completado) => {
  completado = completado === 'true' ? true: false;
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0 ) {
    console.log(listadoPorHacer[index].completado, completado)
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0 ) {
    let result = listadoPorHacer.splice(index, 1);
    guardarDB();
    return result;
  } else {
    return false;
  }
};



module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}