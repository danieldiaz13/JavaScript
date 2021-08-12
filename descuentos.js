//const precioOriginal = 100;
//const descuento = 15;


  //function calcularPrecioConDescuento(precio, descuento) {
  //const porcentajePrecioConDescuento = 100 - descuento;
  //const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  
  //return precioConDescuento;
//}

//function onClickButtonPriceDiscount() {

  
  
//const inputPrice = document.getElementById("InputPrice");
  //const priceValue = inputPrice.value;

  //const inputDiscount = document.getElementById("InputDiscount");
  //const discountValue = inputDiscount.value;

  //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  //const inputCoupon = document.getElementById("InputCoupon");
//const couponValue = inputCoupon.value;

  //const resultP = document.getElementById("ResultP");
  //resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//}

//const coupons = [
  //"Daniel Diaz",
  //"Programador",
  //"electronica",
//];


//function onClickButtonPriceDiscount() {
  //const inputPrice = document.getElementById("InputPrice");
  //const priceValue = inputPrice.value;

  
  //const inputCoupon = document.getElementById("InputCoupon");
 // const couponValue = inputCoupon.value;

 // let descuento;



  //switch(couponValue) {
    //case "Daniel Diaz":
     // descuento = 15;
    //break;
    //case "Programador":
     // descuento = 30;
    //break;
    //case "electronica":
     // descuento = 25;
    //break;
  //}

  //const inputDiscount = document.getElementById("InputDiscount");
  //const discountValue = inputDiscount.value;

  //const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  //const resultP = document.getElementById("ResultP");
  //resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//}



const calculateDisconuntInThePrice = function (valuePrice, valueDiscount) {
  const percentageDiscountedPrice = 100 - valueDiscount;
  const priceWithDiscount = (valuePrice * percentageDiscountedPrice) / 100;

  return priceWithDiscount
};

const valueOfDiscount = function (valuePrice, valueDiscount) {
  const percentageDiscountedPrice = 100 - valueDiscount;
  const priceWithDiscount = (valuePrice * percentageDiscountedPrice) / 100;

  let valorDiscount = valuePrice - priceWithDiscount;
  return valorDiscount
};

const verificationCupon = function () {
  const cupons = [10, 25, 50];
  const cupon = document.getElementById("cupons");
  const valueCupon = parseInt(cupon.value);
  if (valueCupon === cupons[0]) {
      return cupons[0];
  } else if (valueCupon === cupons[1]) {
      return cupons[1];
  } else if (valueCupon === cupons[2]) {
      return cupons[2];
  } else {
      return 0
  }
}

const onClickButtonPriceDiscount = function () {
  const originalPrice = document.getElementById("inputPrice");
  const discount = document.getElementById("inputDiscount");
  const valuePrice = parseInt(originalPrice.value);
  const valueDiscount = parseInt(discount.value);
  const verificationCupons = verificationCupon();
  const discountCupon = valueDiscount + verificationCupons;

  const priceWithDiscount = calculateDisconuntInThePrice(valuePrice, discountCupon);
  const valorDiscount = valueOfDiscount(valuePrice, discountCupon);

  const displayPrice = document.getElementById("displayPrice");
  const price = valuePrice;
  displayPrice.innerText = `$${price}`;

  const displayDiscount = document.getElementById("displayDiscount");
  displayDiscount.innerText = `$${priceWithDiscount}`;

  const displayPercentageDiscount = document.getElementById("displayPercentageDiscount");
  displayPercentageDiscount.innerText = `-${discountCupon}%`

  const displayValueDiscount = document.getElementById("displayValueDiscount");
  displayValueDiscount.innerText = `Esto es lo que haz ahorrado: $${valorDiscount}`;
}
//}

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
  //  precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioOriginal,
//})