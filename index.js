const orderAmount = document.querySelector("#order-amount");
const distanceWay = document.querySelector("#distance");
const calculateBtn = document.querySelector(".calculate-btn");
const amountError = document.querySelector("#amount-error");
const distanceError = document.querySelector("#distance-error");
const resultAmount = document.querySelector(".result-amount");
const resultDelivery = document.querySelector(".result-delivery");
const resultTotal = document.querySelector(".result-total-value");

calculateBtn.addEventListener("click", function() {
    const amount = Number(orderAmount.value);
    const distance = Number(distanceWay.value);
    
    let isValid = true;
    
    if(orderAmount.value === "") {
        orderAmount.classList.add("input-error");
        amountError.textContent = "Enter an order amount value.";
        isValid = false;
    } else if(amount < 1) {
        orderAmount.classList.add("input-error");
        amountError.textContent = "Order amount must be at least £1.";
        isValid = false;
    } else {
        orderAmount.classList.remove("input-error");
        amountError.textContent = "";
    }

    if(distanceWay.value === "") {
        distanceWay.classList.add("input-error");
        distanceError.textContent = "Enter a distance value.";
        isValid = false;
    } else if(distance < 0.1) {
        distanceWay.classList.add("input-error");
        distanceError.textContent = "Distance must be at least 0.1 km.";
        isValid = false;
    } else {
        distanceWay.classList.remove("input-error");
        distanceError.textContent = "";
    }

    if(isValid === false) {
        resultAmount.textContent = "-";
        resultDelivery.textContent = "-";
        resultTotal.textContent = "-";
        return;
    }

    let delivery = 0;

    if (distance <= 5 && amount < 50) {
        delivery = 3;
    } else if(distance > 5 && distance <= 15 && amount < 50) {
        delivery = 5;
    } else if(distance > 15 && amount < 50) {
        delivery = 8;
    } else if(amount >= 50) {
        delivery = 0;
    }

    const total = amount + delivery;

    resultAmount.textContent = `£${amount.toFixed(2)}`;
    resultDelivery.textContent = `£${delivery.toFixed(2)}`;
    resultTotal.textContent = `£${total.toFixed(2)}`;
});

orderAmount.addEventListener("input", function() {
    let amount = Number(orderAmount.value);
    if(orderAmount.value !== "" && amount >= 0) {
        orderAmount.classList.remove("input-error");
        amountError.textContent = "";
    }
});

distanceWay.addEventListener("input", function() {
    let distance = Number(distanceWay.value);
    if(distanceWay.value !== "" && distance >= 0) {
        distanceWay.classList.remove("input-error");
        distanceError.textContent = "";
    }
});