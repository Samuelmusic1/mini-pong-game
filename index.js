const p1 = {
    score: 0,
    btn: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Score'),
}

const p2 = {
    score: 0,
    btn: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Score'),
}


const btnClick3 = document.querySelector('#rst')

const resetBtn = document.querySelector('#rst')
const winScoreSelect = document.querySelector('#winscore')

let winningScore = 3
let isGameOver = false

function scoreUpdate(player, opponent) {
    if(!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classlist.add('has-text-success')
            opponent.score.classlist.add('has-text-danger')
            player.btn.disabled = true
            opponent.btn.disabled = true
        }
    }
    player.display.textContent = player.score
}

p1.btn.addEventListener('click', () => {
    scoreUpdate(p1, p2)
} )

p2.btn.addEventListener('click', () => {
    scoreUpdate(p2, p1)
} )

winScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winScoreSelect.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classlist.remove('has-text-success' , 'has-text-danger')
        p.btn.disabled = false
    }
}
