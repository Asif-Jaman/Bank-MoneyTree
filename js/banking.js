function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountField=inputField.value;
    const totalAmountField=parseFloat(inputAmountField);

    // clear input field
inputField.value='';

return totalAmountField;
};

function updateTotalField(updateTotalFieldId,depositAmount){
    const currentDepositAmount=document.getElementById(updateTotalFieldId);
    const previousDepositAmountText=currentDepositAmount.innerText;
    const previousDepositAmount=parseFloat(previousDepositAmountText);
    //const newDepositTotal=previousDepositAmount+depositAmount;
    currentDepositAmount.innerText=previousDepositAmount+depositAmount;
    
}

//update balance by function
function updateBalance(depositAmount,isAdd){
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceText=balanceTotal.innerText;
    const previousBalance=parseFloat(previousBalanceText);
    //const currentBalance=previousBalance+depositAmount;
    //balanceTotal.innerText=previousBalance+depositAmount;
    if(isAdd==true){
        balanceTotal.innerText=previousBalance+depositAmount;
    }else{
        balanceTotal.innerText=previousBalance-depositAmount;
    }
}


const button=document.getElementById('deposit-button').addEventListener('click',function(){
// const depositField=document.getElementById('deposit-input');
// const depositAmountText=depositField.value;
// const depositAmount=parseFloat(depositAmountText);
const depositAmount=getInputValue('deposit-input');

// update deposit
// const currentDepositAmount=document.getElementById('deposit-total');
// const previousDepositAmountText=currentDepositAmount.innerText;
// const previousDepositAmount=parseFloat(previousDepositAmountText);
// const newDepositTotal=previousDepositAmount+depositAmount;
updateTotalField('deposit-total',depositAmount);


// balance add
// const balanceTotal=document.getElementById('balance-total');
// const previousBalanceText=balanceTotal.innerText;
// const previousBalance=parseFloat(previousBalanceText);
// //const currentBalance=previousBalance+depositAmount;
// balanceTotal.innerText=previousBalance+depositAmount;
updateBalance(depositAmount,true);



});

// withdraw money
document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput=document.getElementById('withdraw-input');
    // const withdrawAmountText=withdrawInput.value;
    // const newWithdrawAmount=parseFloat(withdrawAmountText);
    const newWithdrawAmount=getInputValue('withdraw-input');
  

    //set withdraw total
    // const withdrawTotal=document.getElementById('withdraw-total');
    // const previousWithdrawText=withdrawTotal.innerText;
    // const previousWithdraw=parseFloat(previousWithdrawText);
    // //const totalWithdraw=previousWithdraw+newWithdrawAmount;
    // withdrawTotal.innerText=previousWithdraw+newWithdrawAmount;
    updateTotalField('withdraw-total',newWithdrawAmount);

    // update balance
//     const totalBalanceAmount=document.getElementById('balance-total');
//     const previousBalanceAmountText=totalBalanceAmount.innerText;
//     const previousBalanceAmount=parseFloat(previousBalanceAmountText);

//    // const newBalanceAmount=previousBalanceAmount-newWithdrawAmount;
//     totalBalanceAmount.innerText=previousBalanceAmount-newWithdrawAmount;
    updateBalance(newWithdrawAmount,false);




});









