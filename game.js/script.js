// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 5) + 1;
        var randomNumber2 = Math.floor(Math.random() * 5) + 1;
        var sound = document.createElement('audio');
        sound.src = 'sound.mp3';


        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2)  {
            document.querySelector("h1").innerHTML
                = (player2 + " WINS!" + sound.play());
        }

        else {
            document.querySelector("h1").innerHTML
                = (player1 + " WINS!")+sound.play();
        }


    }, 2500)


}

//script.js:59 Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD

/* var sound1 = document.createElement('audio');
        sound1.src = 'sound1.mp3';

let song1 = new Promise(function (resolve, reject) {
    document.createElement('audio');
    resolve(sound1.src = 'sound1.mp3');
});

song1.then(function () {
    document.querySelector("h1").innerHTML
        = (player1 + " WINS!" + sound1.play());
}); */
