document.getElementById('firstClass-plus').addEventListener('click', function () {
    phoneCartHandler(true);
    console.log('1');

});

document.getElementById('firstClass-minus').addEventListener('click', function () {
    phoneCartHandler(true);
    console.log('2');

});

document.getElementById('economy-plus').addEventListener('click', function () {
    phoneCartHandler(true);
    console.log('3');

});

document.getElementById('economy-minus').addEventListener('click', function () {
    phoneCartHandler(true);
    console.log('4');
});



function phoneCartHandler(isIncrise2) {
    const phoneInput = document.getElementById('firstClass-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrise2 == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrise2 == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const totalPhoneAmount = phoneNewCount * 1219;
    document.getElementById('phone-amount').innerText = totalPhoneAmount;

    calculator();

}
//function mathod-----------------Only for Case section ------
function CaseCartHandler(isIncrise) {
    const caseInput = document.getElementById('economy-count');
    const casecount = parseInt(caseInput.value);
    let caseNewCount = casecount;
    if (isIncrise == true) {
        caseNewCount = casecount + 1;
    }
    if (isIncrise == false && casecount > 0) {
        caseNewCount = casecount - 1;
    }
    caseInput.value = caseNewCount;
    const totalcaseAmount = caseNewCount * 59;
    document.getElementById('case-amount').innerText = totalcaseAmount;

    calculator();

}
function calculator() {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const casecount = parseInt(caseInput.value);
    const totalPrice = phoneCount * 1219 + casecount * 59;
    document.getElementById('sub-total').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    const finalTotal = totalPrice + tax;
    document.getElementById('final-total').innerText = finalTotal;

}

