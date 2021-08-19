function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const newAmmount = inputValue.value;
    const totalAmmount = parseFloat(newAmmount);
    inputValue.value='';
    return totalAmmount;
}
function calculation (idName,ammount){
    const totalElement =document.getElementById(idName);
    const totalText = totalElement.innerText;
    const previousTotal =  parseFloat(totalText);
    totalElement.innerText= previousTotal + ammount;
   
}
function updateTotal(ammount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalance);
    balanceTotal.innerText= previousBalanceTotal + ammount;
    if(isAdd==true){
        balanceTotal.innerText= previousBalanceTotal + ammount;
    }
    else{
        balanceTotal.innerText= previousBalanceTotal - ammount;
    }
} 
function updateBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalance);
    return previousBalanceTotal;
}   
document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput =document.getElementById('deposit-input');
    // const depositInputField =depositInput.value;
    // const depositAmmount = parseFloat(depositInputField);
    
    // const depositSource = document.getElementById('deposite-total');
    // const depositSourceField = depositSource.innerText;
    // const previousDepositTotal = parseFloat(depositSourceField);
    // const depositTotal = depositAmmount + previousDepositTotal;
    
    // depositSource.innerText = depositTotal;
    // depositInput.value='';
    
    // const balanceTotal =document.getElementById('balance-total');
    // const balanceTotalField = balanceTotal.innerText;
    // const balanceAmmount =parseFloat(balanceTotalField);
    // const totalBalance =depositAmmount+balanceAmmount;
    // balanceTotal.innerText=totalBalance;
    const depositAmmount = getInputValue('deposit-input');
    if(depositAmmount>0){
        calculation('deposite-total',depositAmmount);
        updateTotal(depositAmmount,true);
    } 
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputField = withdrawInput.value;
    // const withdrawAmmount = parseFloat(withdrawInputField);
    
    // const withdrawSource = document.getElementById('withdraw-total');
    // const withdrawSourceField = withdrawSource.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawSourceField);
    // const withdrawTotal = withdrawAmmount+previousWithdrawTotal;
    
    // withdrawSource.innerText=withdrawTotal;
    // withdrawInput.value='';
    
    // const balanceTotal =document.getElementById('balance-total');
    // const balanceTotalField = balanceTotal.innerText;
    // const balanceAmmount =parseFloat(balanceTotalField);
    // const newBalance = balanceAmmount - withdrawAmmount;
    // balanceTotal.innerText=newBalance;
    const withdrawAmmount = getInputValue('withdraw-input');
    const currentBalance=updateBalance();
    if(withdrawAmmount>0 && withdrawAmmount<currentBalance){
        calculation('withdraw-total',withdrawAmmount);
        updateTotal(withdrawAmmount,false);
    }
    

})