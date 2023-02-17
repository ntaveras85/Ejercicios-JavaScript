let cadena="Hola mundo"
export function miFuncion(){
    for(let i=0;i<4;i++){
        console.log(cadena[i]);
    }

    console.log("Me recorre los caracteres de acuerdo a 'i'");
}

export function maFuntion(){
    let str="Hola mundo"
    let res =  str.charAt(3)
    console.log(res);
}
