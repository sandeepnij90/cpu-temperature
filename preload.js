const si = require('systeminformation');
const getLocation = require('electron-get-location')
const weatherAPI = '03592d5eb56a6155391a03f010728a2b'


const setCPUTemperature = async () => {
    const temperature = await si.cpuTemperature();
    document.getElementById('cpu').innerText = `${temperature.main}°C`;
}

const setAmbientTemperature = async () => {
    const { latitude, longitude } = await getLocation()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}&units=metric`)
    const { main: { temp } } = await response.json()
    document.getElementById('temp').innerText = `${Math.ceil(temp)}°C`
}

window.addEventListener('DOMContentLoaded', async () => {
    setCPUTemperature()
    setAmbientTemperature()
})



