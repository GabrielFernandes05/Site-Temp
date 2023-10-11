function converterCelsius() {
    let temp1 = window.document.getElementById('celsius')
    let fahrenheit = Number(temp1.value) * 1.8 + 32
    let div = window.document.getElementById('resultadoCelsius')
    div.innerHTML = `A temperatura de ${temp1.value}°C corresponde a ${fahrenheit.toFixed(2)}°F`
}

function converterFahrenheit() {
    let temp2 = window.document.getElementById('fahrenheit')
    let celsius = (Number(temp2.value) - 32) / 1.8
    let div = window.document.getElementById('resultadoFahrenheit')
    div.innerHTML = `A temperatura de ${temp2.value}°F corresponde a ${celsius.toFixed(2)}°C`
}

// Path: Front-end/Site5-ano/script.js