    // global console//
    //eslint-disable no-console//
    document.getElementById('calculate-btn').addEventListener('click',function(){
    // income here
   let incomeInput= document.getElementById('income-input').value
   let incomeInputAmount=parseFloat(incomeInput) || 0;

  let balanceOutput= document.getElementById('balance-output').innerText
  let balanceOutputAmount=parseFloat(balanceOutput) || 0 ;
        document.getElementById('balance-output').innerText = balanceOutputAmount + incomeInputAmount
        let incomes = balanceOutputAmount + incomeInputAmount;
        document.getElementById('income-input').value=('');
  
  //food Expense here
    let foodInput=document.getElementById('food-input').value
    let foodInputAmount=parseFloat(foodInput) || 0 ;
    document.getElementById('food-input').value= foodInputAmount;
    document.getElementById('food-input').value=('');
     
       //rent input
        let rentInput =  document.getElementById('rent-input').value
        let rentInputAmount= parseInt(rentInput) || 0
        document.getElementById('rent-input').value=('');
        //cloths input
        let clothsInput = document.getElementById('cloths-input').value
        let clothsInputAmount= parseInt(clothsInput) || 0
        document.getElementById('cloths-input').value=('');

    let expenseOutput =document.getElementById('expense-output').innerText
    let expenseOutputAmount=parseFloat(expenseOutput) || 0;
    document.getElementById('expense-output').innerText= expenseOutputAmount + foodInputAmount+ rentInputAmount + clothsInputAmount;
    document.getElementById('food-input').value=('')

    let expenses = expenseOutputAmount+rentInputAmount+foodInputAmount+clothsInputAmount
        document.getElementById('balance-output').innerText = incomes - expenses + expenseOutputAmount;

})
    document.getElementById('savings-btn').addEventListener('click',function(){

   let savingInput= document.getElementById('savings-input').value
   let savingInputAmount=parseFloat(savingInput) || 0 ;

   let savingOutput = document.getElementById('savings-output').innerText
   let savingOutputAmount=parseFloat(savingOutput) || 0 ;

   let balanceOutput= document.getElementById('balance-output').innerText
   let balanceOutputAmount=parseFloat(balanceOutput) || 0 ;
   document.getElementById('savings-input').value=('');
  document.getElementById('savings-output').innerText =  (balanceOutputAmount*savingInputAmount/100) + savingOutputAmount
})