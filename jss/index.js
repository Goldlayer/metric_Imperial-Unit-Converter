const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    let inputValue = Number(inputEl.value)
    if (inputValue) {
        length.innerHTML = `${inputValue} meters = ${(3.281 * inputValue).toFixed(2)} feet | ${inputValue} feet = ${((1/3.281) * inputValue).toFixed(2)} meters`
        volume.innerHTML = `${inputValue} liters = ${(0.264 * inputValue).toFixed(2)} gallons | ${inputValue} gallon = ${((1/0.264) * inputValue).toFixed(2)} liters`
        mass.innerHTML = `${inputValue} kilos = ${(2.204 * inputValue).toFixed(2)} pounds | ${inputValue} pounds = ${((1/2.204) * inputValue).toFixed(2)} kilos`
        }else{
            alert("Enter a number greater than '0'")
        }
})
