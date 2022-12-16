const score = document.querySelector('.score');
const result = document.querySelector('.result');
const options = document.querySelectorAll('.option');

let compScore = 0;
let userScore = 0;

options.forEach(i => {
    i.addEventListener('click', (e) => {
        let userChoice = e.target.dataset.option
        game(userChoice)
    })
})

const game = (userChoice) => {
    let compChoiсe = Math.ceil(Math.random(0,1) * 3);

    if(compChoiсe === 1) {
        compChoiсe = 'Rock'
    }
    else if(compChoiсe === 2) {
        compChoiсe = 'Paper'
    }else{
        compChoiсe = 'Scissors'
    }
    switch(compChoiсe[0] + userChoice[0]){
       case 'RP' :
        userWin(userChoice, compChoiсe)
        break
       case 'RS' :
        compWin(compChoiсe, userChoice)
        break
       case 'PR' :
        compWin(compChoiсe, userChoice)
        break
       case 'PS' :
        userWin(userChoice, compChoiсe)
        break
       case 'SP' :
        compWin(compChoiсe, userChoice)
        break
       case 'SR' :
        userWin(userChoice, compChoiсe)
        break
       default: 
       draw(userChoice)
       break
    }    
}

const compWin = (compChoiсe, userChoice) => {
    score.innerHTML = `${userScore} : ${++compScore}`
    result.innerHTML = `${compChoiсe} covers ${userChoice}. Comp win!`
    optionAnimation(userChoice, 'lose')
}

const userWin = (userChoice, compChoiсe) => {
    score.innerHTML = `${++userScore} : ${compScore}`
    result.innerHTML = `${userChoice} covers ${compChoiсe}. You win!`
    optionAnimation(userChoice, 'win')
}

const draw = (userChoice) => {
    result.innerHTML = `It's a draw. Keep going!`
    optionAnimation(userChoice, 'draw')
}

const optionAnimation = (choise, selector) => {
    const link = document.querySelector(`.${choise}`)
    link.classList.add(selector)
    setTimeout(() =>{
        link.classList.remove(selector)
    },700)
}