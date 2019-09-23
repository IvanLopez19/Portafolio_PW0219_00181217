function areacircunferencia(rad){
    var area= (Math.PI)*(rad*rad);
    if(rad<=0){
        return -1;
    }
    else{
        return area;
    }
}

var num= 3;
console.log(areacircunferencia(num));