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

/*const sumar = ( num1, num2 ) => num1 + num2;

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
*/

const arrayProduct = [
    { nombre: "Dulce de leche dietetico", gramos: 500, marca: "Los nietitos", precio: 208 },
    { nombre: "Dulce de batata sin azucar", gramos: 400, marca: "Los nietitos", precio: 69},
    { nombre: "Mermelada de frutilla", gramos: 250, marca: "Los nietitos", precio: 78},
    { nombre: "Dulce de membrillo", gramos: 400, marca: "Los nietitos", precio: 69},
    { nombre: "Manteca Conaprole", gramos: 100, marca: "Conaprole", precio: 50},
    { nombre: "Galletas Paninna", gramos: 500, marca: "El trigal", precio: 99},
    { nombre: "Galletas Sin Azucar", gramos: 300, marca: "El trigal", precio: 105},
    { nombre: "Galletas Salvado", gramos: 350, marca: "El trigal", precio: 119},
    { nombre: "Salamin al vacio Centenario", gramos: 180, marca: "Centenario", precio: 135},
];
let carrito = []

let seleccion = prompt("Bienvenido a Almacen Silvhana, selecciona yes or not si deseas llenar tu carrito.")

while (seleccion != "yes" && seleccion != "not"){
    alert("Por favor ingrese yes or not")
    seleccion = prompt("Hey do you want buy something? Yes or not")
}

if(seleccion == "yes"){
    alert("Aqui tienes nuestra lista de productos")
    let todosLosProductos = arrayProduct.map(
        (arrayProduct) => arrayProduct.nombre + " " + arrayProduct.gramos + " " + arrayProduct.marca + " " + arrayProduct.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "not"){
    alert("Lamentamos que no hayas encontrado lo que buscabas.")
}

while(seleccion != "not"){
    let arrayProduct = prompt("Agrega un producto a tu carrito.")
    let precio = 0

    if (arrayProduct == "Dulce de leche dietetico" || arrayProduct == "Dulce de batara sin azucar" || arrayProduct == "Mermelada de frutilla" || arrayProduct == "Dulce de membrillo" || arrayProduct == "Manteca Conaprole" || arrayProduct == "Galletas Paninna" || arrayProduct == "Galletas Sin Azucar" || arrayProduct == "Galletas Salvado" || arrayProduct == "Salamin al vacio Centenario"){
        switch(arrayProduct){
            case "Dulce de leche dietetico":
            /*gramos = 500
            marca = "Los nietitos"*/
            precio = 208
            break;

            case "Dulce de batara sin azucar":
            precio = 69
            break;
            
            case "Mermelada de frutilla":
            precio = 78
            break;

            case "Dulce de membrillo":
            precio = 69
            break;

            case "Manteca Conaprole":
            precio = 50
            break;

            case "Galletas Paninna":
            precio = 99
            break;

            case "Galletas Sin Azucar":
            precio = 105
            break;

            case "Galletas Salvado":
            precio = 119
            break;

            case "Salamin al vacio Centenario":
            precio = 135
            break;
            default:
            break;
        }
        let cantidad = parseInt(prompt("Cuanta cantidad de cada uno quiere seleccionar?"))

        seleccion = prompt("Quiere ingresar otro producto?")

        while(seleccion === "not"){
            alert("Su producto llegara lo mas breve posible a su hogar. Desde ya muchas gracias, vuelva siempre.")
            break;
        }
        carrito.push({ arrayProduct, cantidad, precio})
        console.log(carrito)

        carrito.forEach((carritoFinal) => {
            console.log( `arrayProduct: ${carritoFinal.arrayproduct}, unidades: ${carritoFinal.cantidad}, Total a pagar $ {carritoFinal.cantidad * carritoFinal.precio}`)
        })
        break;
    } else{
        alert("No hay en stock")
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log("El costo total de su compra es: ${}")
