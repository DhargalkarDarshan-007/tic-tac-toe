let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newbtn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O"
            turno = false

        } else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true

        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('win');

                showWinner(pos1Val);


            }
        }
    }
}


// const showWinner = (winner) => {
//     msg.innerHTML = `Congratulations , Winner is ${winner}`
//     msgContainer.classList.remove("hide")
//     disableBoxes();
//     celebrate();
// }


const showWinner = (winner) => {

    msg.innerHTML = `🎉 Congratulations! 🎉 <br> Winner is ${winner} 🏆`;

    msgContainer.classList.remove("hide");

    disableBoxes();

};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

newGameBtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}















const celebrate = () => {

    // Big celebration container
    const celebration = document.createElement("div");
    celebration.classList.add("celebration");

    celebration.innerHTML = `
        <div class="celebration-text">
            🎉🎊🏆🎊🎉
        </div>
    `;

    document.body.appendChild(celebration);

    // Create confetti
    const colors = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
        "#ff8800"
    ];

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }

    // Remove celebration after 5 seconds
    setTimeout(() => {
        celebration.remove();
    }, 5000);
};