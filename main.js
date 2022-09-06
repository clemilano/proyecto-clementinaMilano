/*console.log("Alfajor Portezuelo:  ");

for(let i = 1; i < 12; i = i + 1){
    console.log("Alfajor Portezuelo");
}


for(let i = 1; i <= 22; i++){
    let ingresarCantidadDeAlfajores = prompt("Ingresar cantidad de alfajores")
    if(ingresarCantidadDeAlfajores < 22){
        break;
    }
    alert("Seleccionaste muchos alfajores pocho")
}
*/

const sumar = ( num1, num2 ) => num1 + num2;

const restar = ( num1, num2 ) => num1 - num2;

const multiplicar = ( num1, num2 ) => num1 * num2;

const dividir = ( num1, num2) => num1 / num2;

function mostrarValores ( operacion, num1, num2){
    switch ( operacion ){
        case"+":
        console.log(sumar ( num1, num2 ))
        break;
        case"-":
        console.log(restar (num1, num2))
        break;
        case"*":
        console.log(multiplicar (num1, num2))
        break;
        case"/":
        console.log(dividir (num1, num2))
        break;
        default:
            console.log("Operation invalid")
    }
}

let answer;
do{
    let num1, operacion, num2
    do{
        num1 = parseFloat(prompt("Enter the number"))
        operacion = prompt("Enter the sing of operation (+,-,*,/)")
        num2 = parseFloat(prompt("Enter the number"))

        if(isNaN (num1) || isNaN(num2)){
            console.log("The number entert is not valid")
        }

        if (num2 === 0 && operacion == "/"){
            console.log("It is not possible to divide by zero")
        }
    }while((isNaN(num1) || isNaN(num2) || (num2 === 0 && operacion == "/")))
    mostrarValores(operacion, num1, num2)
    do{
        answer = prompt("You want to perform another operation?").toLocaleLowerCase()
    }while(answer != "yes" && answer != "not")
}while(answer != "not")

