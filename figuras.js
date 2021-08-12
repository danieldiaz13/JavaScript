console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");


function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;

}

//perimetroC(12);

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
//areaC(6);

//const perimetroCuadrado = ladoCuadrado * 4;

//console.log("El perímetro del cuadro mide: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El Área del cuadrado es igual a: " + areaCuadrado + "cm^2");

console.groupEnd();



//Código triángulo
console.group("Triángulo")
//const lado1 = 6;
//const lado2 = 6;
//const base = 4;
//const altura = 5.5;

//console.log(
//    "los lados del triangulo miden: " 
//    + lado1 + "cm, " 
//    + lado2 + "cm, y " 
//    + base + "cm." 
//);

function perimetroT(lado1, ladoT2 , baseT ){
    return  Number(lado1) + Number(ladoT2) + Number(baseT);
}



function areaT(baseT, alturaT){
    return (baseT * alturaT) / 2;

}
function calcularAreaCuadrado() {
    //const inputCuadrado = document.getElementById("InputCuadrado");
    //const priceValue = inputCuadrado.value;
  
    //const inputDiscount = document.getElementById("InputDiscount");
   // const discountValue = inputDiscount.value;
  
    //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" +  (baseT * alturaT) / 2 + Number(lado1) + Number(ladoT2) + Number(baseT);;
  
}


areaT(3, 4); 
//const perimetroTriangulo = lado1 + lado2 + base;
//console.log("El perímetro del triangulo es: " + perimetroTriangulo);

//console.log("La altura del triangulo es :" + altura + "cm.")

//const areaTriangulo = (base * altura) / 2;
//console.log("El área del triangulo es :" + areaTriangulo + "cm^2");

console.groupEnd();

//Código Circulo

console.group("Círculos");

function diamentroCir(radio){
    return radio * 2;
}


function perimetroCir(radio){
    
    return (radio * 2) * PI;
}


function areaCir(radio){
    return (radio * radio) * PI;
   
}
 




//const radio = 4;
//const diametro = 8;
const PI = Math.PI;

//console.log("El radio del circulo es " + radio +" cm, y el diametro del circulo es:" + diametro +" cm.");

//const perimetroCirculo = diametro * PI;
//console.log("El perímetro del circulo es: " + perimetroCirculo + " cm.");
//const areaCirculo = (radio * radio) * PI;
//console.log("El área del circulo es:" + areaCirculo + " cm^2");



console.groupEnd();

// triángulo isósceles



// Aquí interactuamos con las funciones en HTML

// Cuadrado

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const ladoCuadrado = input.value;

    const area = areaCuadrado(ladoCuadrado);
    alert(area);
}


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const ladoCuadrado = input.value;

    const perimetro = perimetroCuadrado(ladoCuadrado);
    alert(perimetro);
    
        //const inputCuadrado = document.getElementById("InputCuadrado");
        //const priceValue = inputCuadrado.value;
      
    //const inputDiscount = document.getElementById("InputDiscount");
    //const discountValue = inputDiscount.value;
      
        //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
      
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "seria: " + Number(lado1) + Number(ladoT2) + Number(baseT);
      
    
    

}


// Triangulo



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("LadoT1");
    const ladoT1 = input1.value;

    const input2 = document.getElementById("LadoT2");
    const ladoT2 = input2.value;

    const input3 = document.getElementById("BaseT");
    const baseT = input3.value;

    const perimetroTriangulo = perimetroT(ladoT1, ladoT2, baseT);
    alert(perimetroTriangulo);

}

function calcularAreaTriangulo(){
    const input4 = document.getElementById("BaseT");
    const baseT = input4.value;

    const input5 = document.getElementById("AlturaT");
    const alturaT = input5.value;

    const areaTriangulo = areaT(baseT, alturaT);
    alert(areaTriangulo);
}

// Circulo

function calcularDiametroCirculo(){
    const input6 = document.getElementById("Radio");
    const radio = input6.value;

    const diametro = diamentroCir(radio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input6 = document.getElementById("Radio");
    const radio = input6.value;

    const perimetroCirculo = perimetroCir(radio);
    alert(perimetroCirculo);
}

function calcularAreaCirculo(){
    const input6 = document.getElementById("Radio");
    const radio = input6.value;

    const areaCirculo = areaCir(radio);
    alert(areaCirculo);
}

// triángulo isósceles

const buttonAlturaTriangulo = document.getElementById('altura-triangulo')

function alturaTrianguloIsosceles (lado, base) {
  return Math.sqrt((lado * lado) - ((base * base) / 4))
}

buttonAlturaTriangulo.addEventListener('click', () => {
  const lado1 = document.getElementById('lado-triangulo-1').value
  const lado2 = document.getElementById('lado-triangulo-2').value
  const base = document.getElementById('base-triangulo').value

  if (lado1 === lado2) {
    const altura = alturaTrianguloIsosceles(lado1, base)
    alert(`La altura del triangulo es: ${altura}`)
  } else {
    alert('No es isosceles')
  }
})