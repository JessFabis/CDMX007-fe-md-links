const path = require('path')
const fs = require('fs');
const linkMD = require('./linkis');
const pathR = path.resolve (process.argv[2]);
const command= process.argv[3];
const color =require('colors');


const archive = () => {
  fs.readdir(pathR, (err, data) => {
    console.log (`\ud83d\udd35 ${color.bgCyan("La Ruta del Archivo es :")}\ud83d\udcc2 ${color.green.underline(pathR)}	` );
    if (err) {
      console.log('error'+err);
    } else {
      data.forEach(element => {
        if (path.extname(element) === ".md") {
          const doc=  element;
          fs.readFile(`${pathR}/${doc}`, 'utf-8', (err, data) => {
            if (err){
              console.log('error'+err);

            }else if (command == '--validate'){
            linkMD.readlink(data);
            
            
            }/*else if (command == '--states'){
              linkMD.countLink(data);
            }*/
          });
        }
      });
    }
  });
};
module.exports = archive;