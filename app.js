window.addEventListener("load", function() {
    const loaderWrapper = document.querySelector(".loader__wrapper")
    const loader = document.querySelector(".loader")
    loaderWrapper.className += " hidden"
    loader.className += " hidden"
})

var fWidth = window.getComputedStyle(document.getElementsByClassName('form__container')[0]).width.slice(0, -2);
var labels = document.getElementsByClassName('label');
var inputs = document.getElementsByClassName('input');
var range = document.getElementById('range__input')
var calRange = document.getElementById('calculator__range')
var calRangeValue = document.getElementById('range__value')
var rangeImages = document.getElementsByClassName('range__image')
var radioBtnsOne = document.querySelectorAll(".radio__one")
var radioBtnsTwo = document.querySelectorAll(".radio__two")
var cellCheck = document.getElementById("cell__check")

var t = 2500
var p = 30
var k = 0.5


window.addEventListener("DOMContentLoaded", () => {
    range.addEventListener("input", (e) => {
        if(e.target.value <= 10){
            e.target.value = 10
            rangeImages[0].src = './assets/Property 1=on.png'
            rangeImages[1].src = './assets/Property 1=off (1).png'
            rangeImages[2].src = './assets/Property 1=off (2).png'
            rangeImages[3].src = './assets/Property 1=off (3).png'
        } else if(e.target.value >= 10 && e.target.value <= 30){
            e.target.value = 30
            rangeImages[0].src = './assets/Property 1=off.png'
            rangeImages[1].src = './assets/Property 1=on (1).png'
            rangeImages[2].src = './assets/Property 1=off (2).png'
            rangeImages[3].src = './assets/Property 1=off (3).png'
        } else if(e.target.value >= 30 && e.target.value <= 50){
            e.target.value = 50
            rangeImages[0].src = './assets/Property 1=off.png'
            rangeImages[1].src = './assets/Property 1=off (1).png'
            rangeImages[2].src = './assets/Property 1=on (2).png'
            rangeImages[3].src = './assets/Property 1=off (3).png'
        } else if(e.target.value >= 50 && e.target.value <= 70){
            e.target.value = 70
            rangeImages[0].src = './assets/Property 1=off.png'
            rangeImages[1].src = './assets/Property 1=off (1).png'
            rangeImages[2].src = './assets/Property 1=off (2).png'
            rangeImages[3].src = './assets/Property 1=on (3).png'
        } else if(e.target.value > 70){
            e.target.value = 70
        } 
    })
    rangeImages[0].addEventListener("click", () => {
        range.value = 10
        rangeImages[0].src = './assets/Property 1=on.png'
        rangeImages[1].src = './assets/Property 1=off (1).png'
        rangeImages[2].src = './assets/Property 1=off (2).png'
        rangeImages[3].src = './assets/Property 1=off (3).png'
    })
    rangeImages[1].addEventListener("click", () => {
        range.value = 30
        rangeImages[0].src = './assets/Property 1=off.png'
        rangeImages[1].src = './assets/Property 1=on (1).png'
        rangeImages[2].src = './assets/Property 1=off (2).png'
        rangeImages[3].src = './assets/Property 1=off (3).png'
    })
    rangeImages[2].addEventListener("click", () => {
        range.value = 50
        rangeImages[0].src = './assets/Property 1=off.png'
        rangeImages[1].src = './assets/Property 1=off (1).png'
        rangeImages[2].src = './assets/Property 1=on (2).png'
        rangeImages[3].src = './assets/Property 1=off (3).png'
    })
    rangeImages[3].addEventListener("click", () => {
        range.value = 70
        rangeImages[0].src = './assets/Property 1=off.png'
        rangeImages[1].src = './assets/Property 1=off (1).png'
        rangeImages[2].src = './assets/Property 1=off (2).png'
        rangeImages[3].src = './assets/Property 1=on (3).png'
    })
})

calRange.addEventListener("input", (e) => {
    if(e.target.value <= 11){
        e.target.value = 11
        calRangeValue.innerHTML = 30 + "m"
        p = 30
    } else if(e.target.value > 11 && e.target.value <= 22){
        e.target.value = 22
        calRangeValue.innerHTML = 40 + "m"
        p = 40
    } else if(e.target.value > 22 && e.target.value <= 33){
        e.target.value = 33
        calRangeValue.innerHTML = 50 + "m"
        p = 50
    } else if(e.target.value > 33 && e.target.value <= 44){
        e.target.value = 44
        calRangeValue.innerHTML = 60 + "m"
        p = 60
    } else if(e.target.value > 44 && e.target.value <= 55){
        e.target.value = 55
        calRangeValue.innerHTML = 70 + "m"
        p = 70
    } else if(e.target.value > 55 && e.target.value <= 67){
        e.target.value = 67
        calRangeValue.innerHTML = 80 + "m"
        p = 80
    } else if(e.target.value > 67 && e.target.value <= 78){
        e.target.value = 78
        calRangeValue.innerHTML = 90 + "m"
        p = 90
    } else if(e.target.value > 78 && e.target.value <= 89){
        e.target.value = 89
        calRangeValue.innerHTML = 100 + "m"
        p = 100
    } else if(e.target.value){
        e.target.value = 89
        calRangeValue.innerHTML = 100 + "m"
        p = 100
    }
    check()
})

radioBtnsOne.forEach((e) => {
    e.addEventListener("change", (s) => {
        k = s.target.value
        check()
    })
})
radioBtnsTwo.forEach((e) => {
    e.addEventListener("change", (s) => {
        t = s.target.value
        check()
    })
})



function check() {
    var numCheck = t*p/k
    cellCheck.innerHTML = numCheck.toFixed(3)
}

check()

window.addEventListener("resize", resizeWindow)

function resizeWindow() {
    if(window.innerWidth < 600){
        for (i = 0; i < labels.length; i++) {
            var labelWidth = window.getComputedStyle(labels[i]).width.slice(0, -1);
            var inputWidth = fWidth - labelWidth;
            inputs[i].style.width = inputWidth + 'px';
        }
    } else{
        for (i = 0; i < labels.length; i++) {
            var labelWidth = window.getComputedStyle(labels[i]).width.slice(0, -2);
            var inputWidth = fWidth - labelWidth;
            inputs[i].style.width = inputWidth + 'px';
        }
    }
}

resizeWindow()