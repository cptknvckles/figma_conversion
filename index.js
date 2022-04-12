var unitEl = document.getElementById("unitNum").value
var lengthEl = document.getElementById("lengthNum")
var volumeEl = document.getElementById("volumeNum")
var massEl = document.getElementById("massNum")

var unit = 0

function length() {
    // let unit= 0
    let foot = 0.3048
    let meter = 3.28082
    m2f =  unit * meter
    f2m =  unit * foot

    lengthEl.textContent = unit + " meters = " + m2f.toFixed(3) +  " feet " + " | "  + unit + " feet = " + f2m.toFixed(3) + " meters"
}

function volume() {
    // let unit = 0
    let liter = 0.264175
    let gallon = 3.7854
    l2g = liter * unit 
    g2l = unit * gallon

    volumeEl.textContent = unit + " liters = " + l2g.toFixed(3) + " gallons" + " | " + unit + " gallons = " +  g2l.toFixed(3) + " liters"

}

function mass() {
    // let unit = 0
    let kilo = 2.2046
    let pounds = 0.45359
    k2p = unit * kilo
    p2k = unit * pounds
    massEl.textContent = unit + " kilos = " + k2p.toFixed(3) + " pounds" + " | " + unit + " pounds = " + p2k.toFixed(3) + " kilos"
}

function buttonPress() {
    unit = document.getElementById("unitNum").value
    
    
    
    length()
    volume()
    mass()
}

//     length()
//     volume()
//     mass()


// var unitEl = document.getElementById("unitNum").value


