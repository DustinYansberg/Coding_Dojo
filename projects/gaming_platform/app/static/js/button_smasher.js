// alert("we are connected!")
let clickCount = 0
let timeLeft = -1;
let score = document.querySelector('#score')
const gameId = 2
const smashButton = document.querySelector('#smashButton')

smashButton.addEventListener('click', (e) => {
    if (clickCount > 0) {
        if (timeLeft > 0) {
            clickCount += 1
        }
        if (timeLeft === 0) {
            sendData()
            alert(`Wow! You click the button ${clickCount} times!`)
        }

    } else {
        if (timeLeft === -1) {
            startTimer()
            clickCount += 1

        }
    }
    score.innerText = `${clickCount}`
})

function startTimer() {
    timeLeft = 10;
    const downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 10 - timeLeft;
        timeLeft -= 1;
    }, 1000);
}

function sendData() {
    $.ajax({
        url: `/win/${gameId}`,
        type: 'POST',
        data: {'score': clickCount},
        error: function (error) {
            console.log(error);
        }
    });
}

