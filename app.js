const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const outputArea = document.getElementById('output-area');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;
    let convertedTemperature;

    if (isNaN(temperature)) {
        outputArea.textContent = 'Please enter a valid number.';
        return;
    }

    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        outputArea.textContent = `${temperature}°F is approximately ${convertedTemperature.toFixed(2)}°C`;
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        outputArea.textContent = `${temperature}°C is approximately ${convertedTemperature.toFixed(2)}°F`;
    }
}
