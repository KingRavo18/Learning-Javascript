// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element

const submitBtn = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const subBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");

submitBtn.onclick = function(){ 
    subResult.textContent = subBox.checked ? "You are subscribed" : "You are not subscribed";

    if(visaBtn.checked){
        paymentResult.textContent = "You pay with visa";
    }else if(mastercardBtn.checked){
        paymentResult.textContent = "You pay with mastercard";
    }else if(paypalBtn.checked){
        paymentResult.textContent = "You pay with PayPal";
    }else{
        paymentResult.textContent = "You must select a payment type";
    }
}