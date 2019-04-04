const path = require('path')
const fs = require('fs');
const linkMD = require('./linkis');

const archive = () => {
  fs.readdir('./', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      data.forEach(element => {
        if (path.extname(element) === ".md") {
          fs.readFile(element, 'utf-8', (err, data) => {
            if (err)
              console.log(err);

            else
              linkMD.readlink(data);
          });
        }
      });
    }
  });
};
module.exports = archive;
