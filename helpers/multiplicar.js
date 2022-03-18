const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida, consola = '';
        for (let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar){
            console.log(`==============================`.green);
            console.log(`======= TABLA DEL ${base} =========`.red);
            console.log(`==============================`.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida)

        return `Tabla del ${base}`;
    } catch (errr) {
        throw errr;
    }
}

module.exports = {
    crearArchivo
}