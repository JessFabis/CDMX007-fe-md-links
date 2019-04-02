const fs =require ('fs');

//Para escribir un archivo
/*fs.writeFile('./texto.txt','hola chicos',function(err){
    if (err){
        console.log(err);
    }
    console.log('archivo creado');
});
console.log ('ultima linea ');*/

//para leer un archivo
fs.readFile('./texto.txt', function(err,data){
    if(err){
        console.log (err);
    }
    console.log(data.toString());
})
