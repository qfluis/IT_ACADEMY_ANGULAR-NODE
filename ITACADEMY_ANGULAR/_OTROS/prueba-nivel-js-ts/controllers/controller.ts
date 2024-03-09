let car: Car;


function submitCar() {
    let errores = 0; //Es el comptador d'errors
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

	/*
	EX1. Validar els camps:
	- matricula: amb expressió regular que accepti (4 lletres i 3 números). Ex: AAAA324
	- marca: no pot estar buit
	- color: no pot estar buit
	*/
    let matricula:string = plateInput.value;
    let matriculaOk:boolean = /^[A-Z]{4}[0-9]{3}/g.test(matricula);
    let mensaje:string = "";
    
    if(!(matriculaOk && matricula.length == 7)){
        errores++;
        mensaje+="Matricula incorrecta<br>";
        plateInput.style.borderColor="#FF0000";
    } else {
        plateInput.style.borderColor="#00FF00";
    }

    if(brandInput.value.length == 0){
        errores++;        
        mensaje+="Debes introducir una marca<br>";
        brandInput.style.borderColor="#FF0000";
    } else {
        brandInput.style.borderColor="#00FF00";
    }

    if(colorInput.value.length == 0){
        errores++;
        mensaje+="Debes introducir un color<br>";
        colorInput.style.borderColor="#FF0000";
    } else {
        colorInput.style.borderColor="#00FF00";
    }

    if (errores == 0){
        document.getElementById("form1_feedback")!.innerHTML = "";
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
	    showVehicle();
	    showWheelForm();
    } else {
        document.getElementById("form1_feedback")!.innerHTML = mensaje;
    }   

	
}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}

function submitWheelForm() {
    let errores = 0; //Es el comptador d'errors
	
	//EX2. Només fer el "new Wheel" si les 4 rodes són correctes	
    
    for (let i = 1; i <= 4; i++){
        //let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
		let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
        if(!wheelDiameterOk(parseInt(diameterWheel.value))){
            errores++;
            diameterWheel.style.borderColor = "#FF0000";
        } else {
            diameterWheel.style.borderColor = "#00FF00";
        }
    }
    
    if(errores == 0) {
        for (let i = 1; i <= 4; i++) {
            let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
            let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);

            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);

        }
        console.log(car)
        hideWheelForm();
        showWheels();
    } else {
        document.getElementById("form2_feedback")!.innerHTML = "Introduce un diametro de rueda entre 1 y 2";
    }
}

//EX3. Una roda correcta podrà tenir un diàmetre entre 1 i 2. Crear una funció que validi el diàmetre.
function wheelDiameterOk(diameter:number):boolean {
    const minWidth = 1;
    const maxWidth = 2;
    return (diameter >= minWidth && diameter <= maxWidth);
}

function showWheels() {
	//EX4. Optimitzar la funció "showWheels"
    
    /*
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1");
    let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4");

    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
    */

    
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    wheelTitle.innerText = "Wheels:";

    for (let i = 0; i < 4; i++){
        let wheelOutput = <HTMLInputElement>document.getElementById("wheelOutput"+(i+1));
        wheelOutput.innerText = "Wheel "+(i+1)+":  " + "Brand: " + car.wheels[i].brand + "  Diameter: " + car.wheels[i].diameter;
    }
    
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}

function hideWheelForm() {
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carWheel.style.display = "none";
}