const arrayProduct = [
    { nombre: "Dulce de leche dietetico", gramos: 500, marca: "Los nietitos", precio: 208, id: 1},
    { nombre: "Dulce de batata sin azucar", gramos: 400, marca: "Los nietitos", precio: 69, id: 2},
    { nombre: "Mermelada de frutilla", gramos: 250, marca: "Los nietitos", precio: 78, id: 3},
    { nombre: "Dulce de membrillo", gramos: 400, marca: "Los nietitos", precio: 69, id: 4},
    { nombre: "Manteca Conaprole", gramos: 100, marca: "Conaprole", precio: 50, id: 5},
    { nombre: "Galletas Paninna", gramos: 500, marca: "El trigal", precio: 99, id: 6},
    { nombre: "Galletas Sin Azucar", gramos: 300, marca: "El trigal", precio: 105, id: 7},
    { nombre: "Galletas Salvado", gramos: 350, marca: "El trigal", precio: 119, id: 8},
    { nombre: "Salamin al vacio Centenario", gramos: 180, marca: "Centenario", precio: 135, id: 9},
];
let carrito = [];

let seleccion = prompt("Bienvenido a Almacen Silvhana, selecciona yes or not si deseas llenar tu carrito.");

while (seleccion != "yes" && seleccion != "not"){
    alert("Por favor ingrese yes or not")
    seleccion = prompt("Hey do you want buy something? Yes or not")
}

if(seleccion == "yes"){
    alert("Aqui tienes nuestra lista de productos")
    let todosLosProductos = arrayProduct.map(
        (arrayProduct) => arrayProduct.nombre + " " + arrayProduct.gramos + " " + arrayProduct.marca + " " + arrayProduct.precio + " " + arrayProduct.id + " "
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
            id = 1
            precio = 208
            break;

            case "Dulce de batara sin azucar":
            id = 2
            precio = 69
            break;
            
            case "Mermelada de frutilla":
            id = 3
            precio = 78
            break;

            case "Dulce de membrillo":
            id = 4
            precio = 69
            break;

            case "Manteca Conaprole":
            id = 5
            precio = 50
            break;

            case "Galletas Paninna":
            id = 6
            precio = 99
            break;

            case "Galletas Sin Azucar":
            id = 7
            precio = 105
            break;

            case "Galletas Salvado":
            id = 8
            precio = 119
            break;

            case "Salamin al vacio Centenario":
            id = 9
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
        console.log(precio)
        console.log(id)

        carrito.forEach((carritoFinal) => {
            console.log( `arrayProduct: ${carritoFinal.arrayProduct}, unidades: ${carritoFinal.cantidad}, Total a pagar ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
        
    } else{
        alert("No hay en stock")
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log("El costo total de su compra es: $")


