// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var formName = document.querySelector('.name');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorLastName = document.getElementById('errorLastName');  
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress');

// Para facilitar recorrer los campos y validarlos
let fieldCollection = [
        ["name", formName, errorName, "Please, introduce only letters", 3],
        ["lastName", lastName, errorLastName, "Please, introduce only letters", 3],
        ["email", email, errorEmail, "Please, introduce a valid email", 5],
        ["password", password, errorPassword,"",4],
        ["Address", address, errorAddress, "", 6],
        ["phone", phone, errorPhone, "Please, introduce only numbers", 6]
    ];

// Exercise 6

function validate() {
    // Validate fields entered by the user: name, phone, password, and email    
    
    let feedback, element, message;
    for (let i = 0; i < fieldCollection.length; i++) {
        element = fieldCollection[i][1];
        feedback = fieldCollection[i][2];     
        message = fieldCollection[i][3];   
        tamanoMinimo = fieldCollection[i][4]
        
        console.log(fieldCollection[i][0] + ":");
        console.log(element.validity);

        // Mensajes error reseteados
        feedback.innerHTML = "";
        feedback.style.display = "none";

        // Comprobar los vacios o <= 3
        if (element.validity.tooShort == true || element.validity.valueMissing == true) {
            element.classList.add("fieldError");
            feedback.style.display = "block";
            feedback.innerHTML += "> This field is required (" + tamanoMinimo + " characters min)<br>";
        }    
        // Comprobar "typeMismatch" solo en email
        if(element.validity.typeMismatch == true) {
            element.classList.add("fieldError");
            feedback.style.display = "block";
            feedback.innerHTML += "> " + message + "<br>";
        }

        // Comprobar "patternMismatch" para nombre, apellido y teléfono
        if(element.validity.patternMismatch == true) {
            element.classList.add("fieldError");
            feedback.style.display = "block";
            feedback.innerHTML += "> " + message + "<br>";
        }
    }
}
