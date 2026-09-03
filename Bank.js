let Account={
    Account_Holder_Name:"Rahul Sharma",
    Account_Number:308530,
    Account_Balance:10000,
}
function Deposit(amount){
    if(amount<0){
        console.log("Enter a Valid amount ");
        return;
    }
    Account.Account_Balance+=amount;
    console.log("Amount Deposited Successfully")
}
function Withdrawal(money){
    if(money>Account.Account_Balance){
        console.log("Insufficient Balance ");
        return;
    }
    Account.Account_Balance-=money;
    console.log(`${money} is Debitted from your account `);

}
function display(){
    console.log()
    console.log("<--Account Details-->")
    console.log(`Account Holder : ${Account.Account_Holder_Name}`)
    console.log(`Account Number : ${Account.Account_Number}`)
    console.log(`Current Balance : ${Account.Account_Balance}`);
}
display();
Deposit(10000)
display()