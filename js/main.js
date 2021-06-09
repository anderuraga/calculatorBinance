const el_pi = document.getElementById('pi');
const el_pf = document.getElementById('pf');

function calc(){

    
    
    let el_dolar = document.getElementById('dolar');
    let el_cantidad = document.getElementById('cantidad');
    let el_fee = document.getElementById('fee');

    let p_dolar = document.getElementById('resultadoDolar');
    let p_euro = document.getElementById('resultadoEuro');

    let diferencia = Math.round( ( el_pf.value - el_pi.value ) * el_cantidad.value - el_fee.value , 6 );

    p_dolar.innerHTML =  diferencia + ' $';
    p_euro.innerHTML = ( diferencia * el_dolar.value ) +' €';
}


const MAKER = "MKRBUSD";
const API_V3_PRICE = "https://api.binance.com/api/v3/ticker/price?symbol=";


fetch(API_V3_PRICE + MAKER)
  .then(response => response.json())
  .then(data => { 
      console.log(data);
      el_pi.value = data.price;
      el_pf.value = data.price;
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });