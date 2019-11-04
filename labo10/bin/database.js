var mongoose= require('mongoose');
let database = 'RegistroApi';
let port = '27017';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;


const connectDB=()=>{

mongoose.Promise=global.Promise;

mongoose.connect(uri,{useNewUrlParser:true})
.then(()=>{console.log("la conexion a la base de datos fue exitosa")})
.catch(()=>{console.log("Un error ocurrio a la hora de conectarse")});
}

module.exports={
    connectDB
};