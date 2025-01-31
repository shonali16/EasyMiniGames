// SONALI SACHDEV-8826040
// Memory Matching Game with animations and jquery Plugins and Jquery UI widgets
$(document).ready(function() {
    // Progress Bar for Scores
    $("#accordion").accordion();
    $("#progressbar").progressbar({
        value: 0,
        // .Changing the progres bar base on the value of score
        change: function() {
            $(".progress-label").text($("#progressbar").progressbar("value") + "%");
        },
        // after successful play
        complete: function() {
            $(".progress-label").text("Complete!");
            win();
        }
    });

    // Animation for the heading
    $("#left-title h1").animate({ fontSize: "275%", top: "50%" },
        1000
    );
    const cards = document.querySelectorAll(".card"); // Get all cards
    let card1, card2;
    let disable = false; //disable the animations

    function flipCard({ target: clickedCard }) {
        if (card1 !== clickedCard && !disable) { //if the card is not the same card which was cliked previously
            clickedCard.classList.add("flip"); //add flip class to the clicked card

            if (!card1) { //if the card1 is empty
                return card1 = clickedCard;
            }
            card2 = clickedCard; //if the card1 is already clicked
            disable = true;
            let card1Img = card1.querySelector(".back-view img").src,
                card2Img = card2.querySelector(".back-view img").src;
            matchCards(card1Img, card2Img); //check if the cards are matching or not
        }
    }

    function matchCards(img1, img2) {
        if (img1 === img2) {
            matched++; //if the cards match then increment it
            if (matched == 8) {
                setTimeout(() => {
                    return shuffleCards(); //restart the game
                }, 1000);
            }
            $("#progressbar").progressbar("option", "value", (matched / 8) * 100); //restrat the progres bar also
            card1.removeEventListener("click", flipCard); //remove flipcard 
            card2.removeEventListener("click", flipCard);
            card1 = card2 = ""; //reset
            return disable = false; //reenable clicking
        }
        // cards dont match
        setTimeout(() => {
            card1.classList.add("shake"); //class added to shake the cards if not macthed
            card2.classList.add("shake");
        }, 400);

        setTimeout(() => {
            card1.classList.remove("shake", "flip"); //removing classes
            card2.classList.remove("shake", "flip");
            card1 = card2 = "";
            disable = false;
        }, 1200);
    }

    function shuffleCards() {
        matched = 0; //reset matched cards
        disable = false; //reenable clicking
        card1 = card2 = "";
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1); //function used to shuffle the array
        cards.forEach((card, i) => {
            card.classList.remove("flip");
            let imgTag = card.querySelector(".back-view img");
            imgTag.src = `images/img-${arr[i]}.png`; //shuffled names of the images 
            card.addEventListener("click", flipCard);
        });
    }
    // Shuffle in the start
    shuffleCards();
    // Applying flipcard functions on all cards on click events
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
    //Message shown after winning
    function win() {
        $("#progressbar").text("Congratulations, You Won!");

    }
    // jquery plugin using library typed
    var funtext = new Typed('.funtext', {
        strings: ["Play and Win", "Challenge Your Skills", "Discover Fun Mini Games"],
        typeSpeed: 50, // Typing speed in milliseconds
        backSpeed: 30,
        startDelay: 1000, // Delay before typing starts
        backDelay: 1500, // Delay before backspacing starts
        loop: true
    });
});
// MEMORY GAME SCRIPT END

// HOME PAGE SCRIPT END
// ROCK PAPER SCISSORS START
//  Deep Bhojani & 8897133 

function rock() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);

    let rock = (document.getElementById("user").src = "images/rock.png");
    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (rock && rock) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (rock && paper) {
            let result = (document.getElementById("result").innerHTML = "User You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (rock && scissor) {
            let result = (document.getElementById("result").innerHTML = "User You Win");
            let score = document.querySelector("#myScore").innerHTML;
            score++;
            document.querySelector("#myScore").innerHTML = score;
        }
    }
}

function paper() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);

    let paper = (document.getElementById("user").src = "images/paper.png");
    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (rock && paper) {
            let result = (document.getElementById("result").innerHTML = "User You Win");
            let score = document.querySelector("#myScore").innerHTML;
            score++;
            document.querySelector("#myScore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (paper && paper) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (paper && scissor) {
            let result = (document.getElementById("result").innerHTML = "User You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    }
}

function scissor() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);

    let scissor = (document.getElementById("user").src = "images/scissor.png");
    if (c == 0) {
        let rock = (document.getElementById("comp").src = "images/rock.png");
        if (scissor && rock) {
            let result = (document.getElementById("result").innerHTML = "User You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "images/paper.png");
        if (scissor && paper) {
            let result = (document.getElementById("result").innerHTML = "User You Win");
            let score = document.querySelector("#myScore").innerHTML;
            score++;
            document.querySelector("#myScore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "images/scissor.png");
        if (scissor && scissor) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    }
}
// Rock ppaper scissors SCRIIPT END
// HOME PAGE SCRIPT START
$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false
});
// HOME PAGE script end
// BUBBLE CODE SCRIPT START
var timer = 60;
var score = 0;
var hitrn = 0;

function bubble() {
    var clutter = "";

    for (var i = 1; i <= 75; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function newhit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent); // target is the particular number where event is clicked 
    if (clickednum === hitrn) {
        increaseScore();
        bubble();
        newhit();
    }
});

runTimer();
bubble();
newhit();
// HOME PAGE ACCORDIAN      



// BUbkle code script end
// 

// tic tac toe end