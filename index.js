function checkNumber(value, id) {
    const foodError = document.getElementById(`foodError${id}`);

    if (!!Number(value) && Number(value) > 0) {
        foodError.style.display = 'none'
    } else {
        foodError.style.display = 'block'
    }


}

function totalBalance(bal1, bal2) {

    const balanceEx = document.getElementById('balanceEx');
    if (bal1 > bal2) {
        balanceEx.style.display = 'none';
    } else {
        balanceEx.style.display = 'block';
    }

    if (Number(bal1) > 0) {
        if (!!bal1 && !!bal2) {
            return bal1 - bal2;
        }
    } else {
        return 'Enter Income Amount';
    }
}

function totalExpenses(bal1, bal2, bal3) {
    if (!!bal1 && !!bal2 && !!bal3) {
        return bal1 + bal2 + bal3;
    } else {
        return '0.00';
    }
}

function savingAmount(incomeAmount, percentage) {
    if (Number(percentage) > 0) {
        if (!!incomeAmount && !!percentage) {
            return incomeAmount * percentage / 100;
        }
    } else {
        return '0.00';
    }
}



document.getElementById('expensesCalculateButton').addEventListener('click', function() {
        const food = document.getElementById('foodInput');
        const foodValue = food.value;
        checkNumber(food.value, 1)
        const rent = document.getElementById('rentInput');
        const rentValue = rent.value;
        checkNumber(rent.value, 2)
        const clothes = document.getElementById('clothesInput');
        const clothesValue = clothes.value;
        checkNumber(clothes.value, 3)
        const totalExpensesValue = totalExpenses(parseFloat(foodValue), parseFloat(rentValue), parseFloat(clothesValue))
        const totalExpense = document.getElementById('totalExpenses');
        totalExpense.innerText = totalExpensesValue;

        // balance
        const income = document.getElementById('incomeInput');
        const incomeValue = income.value;
        const incomeBalance = totalBalance(parseFloat(incomeValue), Number(totalExpensesValue))
        const balance = document.getElementById('balance');
        balance.innerText = incomeBalance;

    })
    // save part 
document.getElementById('saveButton').addEventListener('click', function() {
    const income = document.getElementById('incomeInput');
    const incomeValue = income.value;
    const percentage = document.getElementById('percentageInput');
    const percentageValue = percentage.value;
    const percentageCalculate = savingAmount(parseFloat(incomeValue), parseFloat(percentageValue));
    const saving = document.getElementById('savingAmount');
    saving.innerText = percentageCalculate;
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceValue = parseFloat(balanceText) - parseFloat(percentageCalculate);
    const ExtraMoney = document.getElementById('parsentage');
    if (parseFloat(balanceText) > parseFloat(percentageCalculate)) {
        ExtraMoney.style.display = 'none';
    } else {
        ExtraMoney.style.display = 'block';
    }
    const remainingBalance = document.getElementById('remainingBalance');
    remainingBalance.innerText = balanceValue;
})