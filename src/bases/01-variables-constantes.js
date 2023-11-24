const valorQueNoCambia = 10;

let valorQueCambia = 1;

valorQueCambia = 20;

let control = true;
//variables de scope
if(control){
     //esta sentencia toma el valor anterior y lo suma segun el scope valorQueCambia = 10 + valorQueCambia;
     // esta sentencia lo que hace es generar un nuevo valor para la variable, es decir una nueva varibale 
    let valorQueCambia = 10;
    console.log('Valor que cambia' , valorQueCambia);
}