// script.js
function convertLength() {
    // Obtiene el valor de la cantidad ingresada y la convierte a un número de punto flotante
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la unidad de medida seleccionada
    const inputUnit = document.getElementById('inputUnit').value;

    // Factores de conversión
    const metersToCentimeters = 100; // 1 metro = 100 centímetros
    const metersToMillimeters = 1000; // 1 metro = 1000 milímetros

    // Variables para almacenar las cantidades convertidas
    let meters, centimeters, millimeters;

    // Convierte la cantidad según la unidad seleccionada
    if (inputUnit === 'M') {
        meters = inputAmount;
        centimeters = inputAmount * metersToCentimeters;
        millimeters = inputAmount * metersToMillimeters;
    } else if (inputUnit === 'CM') {
        meters = inputAmount / metersToCentimeters;
        centimeters = inputAmount;
        millimeters = inputAmount * 10; // 1 cm = 10 mm
    } else if (inputUnit === 'MM') {
        meters = inputAmount / metersToMillimeters;
        centimeters = inputAmount / 10; // 1 mm = 0.1 cm
        millimeters = inputAmount;
    }

    // Actualiza los elementos del DOM con las cantidades convertidas
    document.getElementById('metersValue').innerText = `${meters.toFixed(2)} M`;
    document.getElementById('centimetersValue').innerText = `${centimeters.toFixed(2)} CM`;
    document.getElementById('millimetersValue').innerText = `${millimeters.toFixed(2)} MM`;
}