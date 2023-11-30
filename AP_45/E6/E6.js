
function redireccion() {
    var url = document.getElementsByName('unidad')[0].options[document.getElementsByName('unidad')[0].selectedIndex].value;

    if (url != null) {
        window.location = url;
    }
}

function converTiempog(){
function converTiempo() {
    var form = document.querySelector('form');
    var unidadOrigen = document.getElementById('unidad_origen');
    var valorOrigen = document.getElementById('valor_origen');
    var unidadDestino = document.getElementById('unidad_destino');
    var resultado = document.getElementById('resultado');
 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
 
        var origen = unidadOrigen.value;
        var valor = parseFloat(valorOrigen.value);
        var destino = unidadDestino.value;
 
        var conversionResult;
        switch (origen) {
            case 'segundos':
                if (destino === 'minutos') {
                   conversionResult = valor / 60;
                } else if (destino === 'horas') {
                   conversionResult = valor / 3600;
                } else if (destino === 'días') {
                   conversionResult = valor / 86400;
                } else if (destino === 'semanas') {
                   conversionResult = valor / 604800;
                } else if (destino === 'meses') {
                   conversionResult = valor / 2592000;
                } else if (destino === 'años') {
                   conversionResult = valor / 31557600;
                } else {
                   conversionResult = valor;
                }
                break;
 
            case 'minutos':
                if (destino === 'segundos') {
                   conversionResult = valor * 60;
                } else if (destino === 'horas') {
                   conversionResult = valor / 10;
                } else if (destino === 'días') {
                   conversionResult = valor / 1440;
                } else if (destino === 'semanas') {
                   conversionResult = valor / 10080;
                } else if (destino === 'meses') {
                   conversionResult = valor / 43830;
                } else if (destino === 'años') {
                   conversionResult = valor / 525960;
                } else {
                   conversionResult = valor;
                }
                break;
 
            case 'horas':
                if (destino === 'segundos') {
                   conversionResult = valor * 3600;
                } else if (destino === 'minutos') {
                   conversionResult = valor * 60;
                } else if (destino === 'días') {
                   conversionResult = valor / 24;
                } else if (destino === 'semanas') {
                   conversionResult = valor / 168;
                } else if (destino === 'meses') {
                   conversionResult = valor / 730;
                } else if (destino === 'años') {
                   conversionResult = valor / 8766;
                } else {
                   conversionResult = valor;
                }
                break;
 
            case 'días':
                if (destino === 'segundos') {
                   conversionResult = valor * 86400;
                } else if (destino === 'minutos') {
                   conversionResult = valor * 1440;
                } else if (destino === 'horas') {
                   conversionResult = valor * 24;
                } else if (destino === 'semanas') {
                   conversionResult = valor / 7;
                } else if (destino === 'meses') {
                   conversionResult = valor / 30.44;
                } else if (destino === 'años') {
                   conversionResult = valor / 365.25;
                } else {
                   conversionResult = valor;
                }
                break;
        }
    });

    return conversionResult;
 }

 var conversionResult = converTiempo();
resultado.textContent = conversionResult;

}

