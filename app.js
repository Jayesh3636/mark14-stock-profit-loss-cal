const basePrice = document.querySelector('#basePrice')
const qntyOfStocks = document.querySelector('#qntyStocks')
const CP = document.querySelector('#CP')
const btn = document.querySelector('.btn')
const outputMsg = document.querySelector('.outputMsg')






function calculateProfitAndLoss(initial, qnty, current){
    if (initial < current) {
        //profit
        let profit = (current - initial) * qnty
        let profitPercentage = (profit/initial) * 100

        showMessage(`The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`)
    }
    else if (initial > current){
        // loss
        let loss = (initial - current) * qnty
        let lossPercentage = (loss/initial) * 100

        showMessage(`The loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`)
    }
    else {
        // same
        showMessage('No Profit nor Loss, invest properly!')
    }
}






function profitOrLoss() {
    const initialCost = Number(basePrice.value)
    const totalqnty = Number(qntyOfStocks.value)
    const currentCost = Number(CP.value)

    calculateProfitAndLoss(initialCost, totalqnty, currentCost)
}





function showMessage(msg) {
    outputMsg.innerText = msg
}





btn.addEventListener('click', profitOrLoss)