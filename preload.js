const si = require('systeminformation');

window.addEventListener('DOMContentLoaded', async () => {
    const temperature = await si.cpuTemperature();
    const element = document.getElementById('replace');
    if (element) element.innerText = `The CPU temperature is: ${temperature.main} °C`;   
})

