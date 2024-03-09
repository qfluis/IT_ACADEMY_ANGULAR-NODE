// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
// Revisar https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
//var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

var cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}


var total = 0;

// Exercise 1
/*
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let found = false;
    let i = 0;
    let product;
    while (found == false && i < products.length) {
        if (products[i].id == id){
            product = products[i];
            found = true;            
        }
        i++;        
    }
        
    // 2. Add found product to the cartList array
    if (found == true) {
        cartList.push(product);
        //console.log(cartList);
    }
}
*/

// Exercise 2
function cleanCart() {
    // cartList = []      cartList.length = 0
    cart.splice(0, cart.length);
    //console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let importeTotal = 0;
    for (let i=0; i < cart.length; i++) {
        importeTotal += (cart[i].price * cart[i].quantity);
    }
    
    return importeTotal.toFixed(2);
}

// Exercise 4
/*
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart.splice(0, cart.length); // vacia cart
    let cartItem;
    for (let i = 0; i < cartList.length; i++) {
        cartItem = cartList[i];
        let found = false;   // ¿Crear fuera del for? ¿Aquí está ok?
        let j = 0;
        
        while (found == false && j < cart.length) {
            if (cartItem.id == cart[j].id) {
                cart[j].quantity += 1;
                cart[j].subtotal += cartItem.price;
                cart[j].subtotalWithDiscount += cartItem.price; // cambiar cuando se implementen promociones.
                found = true;
            } 
            j++;
        }

        if (found == false) {
            let cartItemNew = {
                "id": cartItem.id,
                "name": cartItem.name,
                "price": cartItem.price,
                "type": cartItem.type,
                "quantity": 1,
                "subtotal": cartItem.price,
                "subtotalWithDiscount": cartItem.price // cambiar cuando se implementen promociones
            };
                        
            cart.push(cartItemNew);
        }        
    }
    console.log(cartList);
    console.log(cart);
}
*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // array de objetos promocionados
    let promotions = [
        {
            "idProduct": 1,
            "units": 3,
            "newPrice": 10
        },
        {
            "idProduct": 3,
            "units": 10,
            "newPrice": 3.33333
        }
    ];

     
    for (let i = 0; i < cart.length; i++){
        let promocionado = false;
        let j = 0;
        while (promocionado == false && j < promotions.length){
            if (cart[i].id == promotions[j].idProduct && cart[i].quantity >= promotions[j].units){
                //console.log(cart[i].name + " - Producto promocionado!");
                cart[i].subtotalWithDiscount = cart[i].quantity * promotions[j].newPrice;
                promocionado = true;
            } 
            j++;
        }
        if (promocionado == false) {
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    let foundProduct = false;
    let i = 0;
    let product;
    while (foundProduct == false && i < products.length) {
        if (products[i].id == id){
            product = products[i];
            foundProduct = true;            
        }
        i++;        
    }
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    
    
    if (foundProduct == true) {
        let foundProductInCart = false;
        let productInCart;
        let j = 0;
        while (foundProductInCart == false && j < cart.length){
            if(cart[j].id == id){
                cart[j].quantity++;
                cart[j].subtotal += cart[j].price;
                cart[j].subtotalWithDiscount = cart[j].subtotal;
                foundProductInCart = true;
            }
            j++;
        }

        if (foundProductInCart == false){
            product.quantity = 1;
            product.subtotal = product.price;
            product.subtotalWithDiscount = 0;
            cart.push(product);
        }
    }
    console.log(cart);
    backupCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array cart to get the item to remove
    let foundProduct = false;
    let i = 0;
    let product;
    while (foundProduct == false && i < cart.length) {
        if (cart[i].id == id){
            product = cart[i];
            if (product.quantity > 1){
                product.quantity--;
                product.subtotal -= product.price;
                product.subtotalWithDiscount = 0;
            } else {
                cart.splice(i,1);
            }
            
            foundProduct = true;            
        }
        i++;        
    }
    backupCart();
    // console.log(cart);
}

function backupCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Exercise 9
function printCart() {
    // Aplicamos promociones
    let totalWhithDiscount = applyPromotionsCart();
    // Fill the shopping cart modal manipulating the shopping cart dom
    let contenedor = document.querySelector("#cartModal .modal-body .list");
    let response = '<div class = "list"><table class="table"><tr><th>Product</th><th>Quantity</th><th>unit price</th><th>Subtotal</th><th>Subtotal with discount</th><th></th><th></th></tr>';
    for (let i = 0; i < cart.length; i++){
        
        response += "<tr><td>" + cart[i].name + "</td><td>" + cart[i].quantity + "</td><td>" + cart[i].price +  "</td><td>" 
                        + cart[i].subtotal.toFixed(2) + "</td><td>" + cart[i].subtotalWithDiscount.toFixed(2) + '</td><td><a href="#" onclick="addToCartAndPrint(' + cart[i].id 
                        + ')">+1</a></td></td><td><a href="#" onclick="removeAndPrintFromCart(' + cart[i].id + ')">-1</a></td></tr>';        
    }
    response += "</table>";
    response += '<div class="text-center"> Total: ' + calculateTotal() + '</div><div class="text-center"> Total with discount: ' + calculateTotalWithDiscount() + '</div></div>';
    contenedor.outerHTML = response;
}

function calculateTotalWithDiscount() {
    // Calculate total price of the cart using the "cartList" array
    let importeTotal = 0;
    for (let i=0; i < cart.length; i++) {
        importeTotal += cart[i].subtotalWithDiscount;
    }
    
    return importeTotal.toFixed(2);
}

function removeAndPrintFromCart(id) {
    removeFromCart(id);
    printCart();
}

function addToCartAndPrint(id){
    addToCart(id);
    printCart();
}