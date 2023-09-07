
console.log("started")
const colorArray = ["red","green","yellow","blue"]
const ddColor = document.getElementById("ddColor")
const colorSelectButton = document.getElementById("assignColor")


function fillDropdown(item){
console.log("i lykke : "+item)
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el.text)

}
function assignColor(){
    console.log(colorArray)
    colorArray.forEach(fillDropdown)


}

assignColor()

colorSelectButton.addEventListener('click',assignColor)