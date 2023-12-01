const bill = document.querySelector('.bill')
const people = document.querySelector('.people')
const tip = document.querySelector('.tip')
const btn = document.querySelector('.calculate')
const score = document.querySelector('.score')

const calc = () => {
    if ((bill.value === '') || (people.value === '')) {
        score.textContent = "zjebałeś"
    } else {
        
        const calculatedScore = (parseInt(bill.value) + parseInt(bill.value * tip.value))/people.value
        score.textContent = calculatedScore.toFixed(2)
    }
}

const test = (e) => {
    if (!/\d/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
      }
}



btn.addEventListener('click', calc)
bill.addEventListener('keydown', test);
people.addEventListener('keydown', test);