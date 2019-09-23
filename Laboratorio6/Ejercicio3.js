
var arr=[1,4,4,3,2];
function ocurrencia (arr,num){
    var cont=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]===num){
            cont=cont+1;
        }
    }
    console.log(cont);
}

var num2=4;
var num3=ocurrencia(arreglo,num2)
console.log(num3);