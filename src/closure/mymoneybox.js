// function moneybox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneybox(5);
// moneybox(5);

function moneybox(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneybox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyboxAna = moneybox();
moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);