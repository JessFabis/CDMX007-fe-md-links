const Math = {}

function add (x1,x2){
    return x1+x2;

}

function substrac (x1,x2){
    return x1-x2;
    
}
function multiply (x1,x2){
    return x1*x2;
    
}
function divide (x1,x2){
    if(x2 == 0){
        console.log("no se puede dividir por 0")
    }else{
        return x1/x2;
    }
}
//console.log(divide(2,0));

//module.exports =Math;

Math.add =add;
Math.substrac =substrac;
Math.multiply =multiply;
Math.divide =divide;

module.exports =Math;

/*
exports.suma= add;
exports.resta= substrac;
exports.multiplicacion= multiply;
exports.divicion= divide;*/

/*function hellow(name){
    console.log('hola',name);
}
module.exports= hellow; //estoy exportando una funcion a Math */

