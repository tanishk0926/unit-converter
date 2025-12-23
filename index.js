let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")

function giver(){
    let x = inputEl.value
    if(x != "" && x > 0 ){
     const meter = 0.3048*x
    const feet  = 3.281*x
    const vol = x*3.785
    const gallon = 0.264*x
    const kilo  = 0.453*x
    const pounds = 2.204*x
    lengthEl.textContent = `${x} meters = ${feet.toFixed(2)} feet | ${x} feet = ${meter.toFixed(2)} meters`
    volumeEl.textContent = `${x} litres = ${gallon.toFixed(2)} gallons | ${x} gallons = ${vol.toFixed(2)}  litres`
    massEl.textContent =  `${x} kilograms = ${pounds.toFixed(2)} pounds | ${x} pounds = ${kilo.toFixed(2)} kilograms`
    }
  
    
    lengthEl.classList.add("show")
    volumeEl.classList.add("show")
    massEl.classList.add("show")
  }

 function resetel(){
     lengthEl.textContent  = ""
     volumeEl.textContent  = ""
     massEl.textContent  = ""
     lengthEl.classList.remove("show")
     volumeEl.classList.remove("show")
     massEl.classList.remove("show")
     inputEl.value = ""

 }
