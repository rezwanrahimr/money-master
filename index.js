document.getElementById('expensesCalculateButton').addEventListener('click', function() {
        const food = document.getElementById('foodInput');
        const foodValue = food.value;
        const rent = document.getElementById('rentInput');
        const rentValue = rent.value;
        const clothes = document.getElementById('clothesInput');
        const clothesValue = clothes.value;
        const totalExpensesValue = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
        const totalExpense = document.getElementById('totalExpenses');
        totalExpense.innerText = totalExpensesValue;

        // balance
        const income = document.getElementById('incomeInput');
        const incomeValue = income.value;
        const incomeBalance = parseFloat(incomeValue) - totalExpensesValue;
        const balance = document.getElementById('balance');
        balance.innerText = incomeBalance;

    })
    // save part 
document.getElementById('saveButton').addEventListener('click', function() {
    const income = document.getElementById('incomeInput');
    const incomeValue = income.value;
    const percentage = document.getElementById('percentageInput');
    const percentageValue = percentage.value;
    const percentageCalculate = parseFloat(incomeValue) * parseFloat(percentageValue) / 100;
    const saving = document.getElementById('savingAmount');
    saving.innerText = percentageCalculate;
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceValue = parseFloat(balanceText) - parseFloat(percentageCalculate);
    const remainingBalance = document.getElementById('remainingBalance');
    remainingBalance.innerText = balanceValue;
})