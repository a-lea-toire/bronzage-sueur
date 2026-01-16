const body = document.querySelector('body')
const image = [image1, image2, image3,]

let mouseX = 0
let mouseY = 0




document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX
    mouseY = e.pageY
})

function test() {
    console.log(mouseX)
    console.log(mouseY)
}

