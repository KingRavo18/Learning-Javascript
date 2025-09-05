// COMPOUND INTEREST CALCULATOR

//Default to zero is used for practise. It is better to return errors than assuming
//user intent.

function calculate() {
    const principalAmountInput = document.getElementById("PrincipalAmountInput");
    const interestRateInput = document.getElementById("InterestRateInput");
    const yearsInput = document.getElementById("yearsInput");
    const total = document.getElementById("result");

    let principalAmount = Number(principalAmountInput.value);
    let interestRate = Number(interestRateInput.value / 100);
    let years = Number(yearsInput.value);

    if(principalAmount < 0 || isNaN(principalAmount)){
        principalAmount = 0;
        principalAmountInput.value = 0;
    }
    if(interestRate < 0 || isNaN(interestRate)){
        principalAmount = 0;
        interestRateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principalAmount * Math.pow((1 + interestRate / 1), 1 * years);
    total.textContent = result.toLocaleString(undefined, {style: "currency", currency: "EUR"});
}