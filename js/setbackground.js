console.log("jeg sætter farve")

let inpColor = document.querySelector(".inpColor")
console.log(inpColor)
let pbSetCol = document.querySelector(".pbSetColor")
const inputColorPicker = document.getElementById("intColorPicker")

let inputColorValue = document.querySelector(".inpColorValue")
console.log(pbSetCol)
pbSetCol.textContent = "Tryk mig for set color"
let bdy = document.querySelector("body")
console.log(bdy)



function setBackgroundColor() {
    let col = inpColor.value; console.log(col)
    bdy.style.backgroundColor = col
    inputColorValue.value = bdy.style.backgroundColor
}
function useColorPicker() {
    let col = inputColorPicker.value; console.log(col)
    bdy.style.backgroundColor = col
    inputColorValue.value = bdy.style.backgroundColor
}

pbSetCol.addEventListener('click',setBackgroundColor)

document.addEventListener('keyup', setBackgroundColor)

inputColorPicker.addEventListener('input', useColorPicker)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

const pArray = Array.from(pTags)
let fontSize = 20
function changeFontSize(element) {
    element.style.fontSize = fontSize + "px"
    console.log(fontSize)

}

function allIncrease(){
    fontSize = fontSize + 1
    pArray.forEach(changeFontSize)

}
function allDecrease(){
    fontSize -=1
    pArray.forEach(changeFontSize)

}

let increase = document.querySelector(".increaseSeize")
let decrease = document.querySelector(".decreaseSeize")

increase.addEventListener('click',allIncrease)
decrease.addEventListener('click',allDecrease)