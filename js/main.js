function calc(){

    let el_pi = document.getElementById('pi');
    let el_pf = document.getElementById('pf');
    let el_dolar = document.getElementById('dolar');
    let el_cantidad = document.getElementById('cantidad');
    let el_fee = document.getElementById('fee');

    let p_dolar = document.getElementById('resultadoDolar');
    let p_euro = document.getElementById('resultadoEuro');

    let diferencia = Math.round( ( el_pf.value - el_pi.value ) * el_cantidad.value - el_fee.value , 6 );

    p_dolar.innerHTML =  diferencia + ' $';
    p_euro.innerHTML = ( diferencia * el_dolar.value ) +' €';
}