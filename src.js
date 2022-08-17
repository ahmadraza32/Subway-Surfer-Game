let counter = 0
const score = document.querySelector('.score')
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    left -= 100
    if(left >= 0) character.style.left = left + 'px'
}

function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    left += 100
    if(left < 300) character.style.left = left + 'px'
}

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') moveLeft()
    if(e.key === 'ArrowRight') moveRight()
})

let block = document.querySelector("#block")
block.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 3)
    left = random * 100
    block.style.left = left + 'px'
    counter++
})

setInterval(() => {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    score.innerText = `Score ${counter}`

    if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300){
        alert("Game over, your score is: " + counter)
        block.style.animation = "none"
    }
}, 50)