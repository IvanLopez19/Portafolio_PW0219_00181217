
var arr=[1,2,3,4,5];
function suma(arr){

    var suma=0;
    var cont=0;
    for ( var i=0; i<arr.length; i++){
        suma= (suma+arr[i]);
        cont=(cont+1);
    }
    console.log(suma);
    console.log(suma/cont);
}


console.log(suma(arr));