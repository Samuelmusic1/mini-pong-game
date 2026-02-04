const btnClick1 = document.querySelector('#p1Btn')
const btnClick2 = document.querySelector('#p2Btn')
const btnClick3 = document.querySelector('#rst')
const player1Score = document.querySelector('#p1Score')
const player2Score = document.querySelector('#p2Score')
const resetBtn = document.querySelector('#rst')
const winScoreSelect = document.querySelector('#winscore')

let p1Score = 0
let p2Score = 0
let winningScore = 3
let isGameOver = false

btnClick1.addEventListener('click', () => {
    if(!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            isGameOver = true
            p1Score.classlist.add('has-text-success')
            p2Score.classlist.add('has-text-danger')
            btnClick1.disabled = true
            btnClick2.disabled = true
        }
    }
    player1Score.textContent = p1Score
} )

btnClick2.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            isGameOver = true
            p2Score.classlist.add('has-text-success')
            p1Score.classlist.add('has-text-danger')
            btnClick1.disabled = true
            btnClick2.disabled = true
        }
    }
    player2Score.textContent = p2Score
} )

winScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winScoreSelect.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    player1Score.textContent = 0
    player2Score.textContent = 0
    p1Score.classlist.remove('has-text-success' , 'has-text-danger')
    p2Score.classlist.remove('has-text-success' , 'has-text-danger')
    btnClick1.disabled = false
    btnClick2.disabled = false
}
