function buttonHasBeenClicked(){
  console.log ('the button has been clicked')
  button.removeEventListener('click', buttonHasBeenClicked)
}

const button = document.getElementById('drink')

button.addEventListener ('click', buttonHasBeenClicked)

function DougFunction(){
  document.getElementById('drink').innerHTML = "Agua de Valencia"
}
function MonkeyFunction(){
  document.getElementById('fruit').innerHTML = "Oranges"
}
function ChunkFunction(){
  document.getElementById('food').innerHTML = "Paella"

}
document.getElementById('drink').addEventListener ("click", BackgroundchangeRed)
document.getElementById('fruit').addEventListener ("click", BackgroundchangeYellow)
document.getElementById('food').addEventListener ("click", BackgroundchangeBrown)

function BackgroundchangeRed(){
  document.innerHTML=""
}
function BackgroundchangeYellow(){
  document.body.style.backgroundColor= "yellow"
}
function BackgroundchangeBrown(){
  document.body.style.backgroundColor= "brown"
}

const button = document.querySelectorAll(".imagebutton")
  // loop over it
