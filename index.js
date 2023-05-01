alert("תזהר מהדינוזאור הוא רעב")
let amuntElement = document.getElementById("amuntid")
let totle = 0

function plus() {
totle = totle + 1
amuntElement.innerHTML = totle
}

function minus() {
    totle = totle - 1
    amuntElement.innerHTML = totle
}

function recet() {
    totle = 0
    amuntElement.innerHTML = totle
}

function rich() {
    totle = totle + 1000000000
    amuntElement.innerHTML = totle
}

function p100lus() {
    totle = totle + 100
    amuntElement.innerHTML = totle
}

function m100inus() {
    totle = totle - 100
    amuntElement.innerHTML = totle
}

function p1000lus() {
    totle = totle + 1000
    amuntElement.innerHTML = totle
}

function m1000inus() {
    totle = totle - 1000
    amuntElement.innerHTML = totle
}