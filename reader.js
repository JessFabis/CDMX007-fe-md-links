const path = require('path')
const fs = require('fs');
const linkMD = require('./linkis');

const archive = () => {
  fs.readdir('./', (err, data) => {
    const pathR = path.resolve ('./')
    console.log ( 'ruta:'+pathR);
    if (err) {
      console.log('error'+err);
    } else {
      data.forEach(element => {
        if (path.extname(element) === ".md") {
          const doc=  element;
          fs.readFile(`${pathR}/${doc}`, 'utf-8', (err, data) => {
            if (err){
              console.log('error'+err);

            }else{
            linkMD.readlink(data);
            
            
            }
          });
        }
      });
    }
  });
};
module.exports = archive;