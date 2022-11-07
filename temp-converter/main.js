// Write pseudo code first


// Only on "click" 0 -> 32
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    // Get the value out of input
    let temp = document.querySelector('#cel').value
    // Convert the value
    temp = temp * 9/5 + 32
    // Show the value/result to the user
    document.querySelector('#placeToYell').innerText = temp
    }

