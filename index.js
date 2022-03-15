/*
 * Estructura básica para crear una promesa
const nuevaPromesa = new Promise(
    (resolve, reject)=>{
        resolve(resultado);
        reject(error);
    }
)
*/

/**
 * Ejemplo de creación de una promesa
 */
const imparAleatorio = new Promise(
    (resolve, reject)=>{
        const numero = Math.floor(Math.random()*10);
        if ( numero % 2 !== 0 ) resolve(numero);
        reject(numero);
    }
)

imparAleatorio
.then(
    impar => console.log("Un impar:", impar)
)
.catch(
    par => console.error("Nos salió malo:", par)
)

/**
 * Adaptar functión asíncrona que usa callbacks a un modelo
 * de promesas que nos permita usar async/await
 */

function getLocation () {
    const geolocalizacion = new Promise(
        (resolv, reject)=>{
            navigator.geolocation.getCurrentPosition(
                (data) => resolv(data), //Callback si bien
                (error) => reject(error) //Callback si mal
            )
        }
    )
    return geolocalizacion
}

getLocation().then().catch()