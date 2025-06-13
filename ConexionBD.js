/*9.	Promesa que simula la conexión a una base de datos
Ejercicio: Crea una promesa conectarDB que se resuelve si conexionEstablecida = true y se rechaza si no. Usa setTimeout para simular el tiempo de espera.
*/

const conectarDB = new Promise((resolve, reject) =>{
const conexionEstablecida = true;

  setTimeout(() => {
    if (conexionEstablecida === true) {
      resolve("Conexión a la BD");
    } else {
      reject("No se pudo conectar a la BD");
    }
  }, 2000);
});

conectarDB
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));