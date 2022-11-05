// Write pseudo code first
// Only on "click" 0 -> 32
// Get the value out of input
// Convert the value
// Show the value/result to the user


document.querySelector('#convert').addEventListener('click', convert)

    function convert() {
        let temp = document.querySelector('#cel').value

        temp = temp * 9/5 + 32

        document.querySelector('#placeToYell').innerText = temp
    }

