let minus = document.getElementById('minus')
let count = document.getElementById('count')
let plus = document.getElementById('plus')
let number = 0
plus.addEventListener('click', function() {
    number++
    count.textContent = number
})
minus.addEventListener('click', function() {
    number--
    count.textContent = number
})




