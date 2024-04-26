const bgColor = document.querySelector('#div')
function color() {
bgColor.style.backgroundColor = ('orange')
}
bgColor.addEventListener('mouseenter', color)

function color2() {
    bgColor.style.backgroundColor = ('black')
    }
    bgColor.addEventListener('mouseleave', color2)






// task 2

const changeText = document.querySelector('#div')

function change() {
    changeText.textContent = 'Hello world'
}
function changeText2() {
    changeText.textContent = 'Hover me'
}
changeText.addEventListener('mouseenter', change)
changeText.addEventListener('mouseleave', changeText2)