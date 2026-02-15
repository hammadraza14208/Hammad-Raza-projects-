// Create a BankAccount class with owner and balance in the constructor, and add methods deposit(amount) to increase balance, withdraw(amount) to subtract money only if enough balance (otherwise print "Not enough money"), and checkBalance() to display the current balance. 💪
class BankAccount {
  constructor(owner, balnce,) {
    this.owner = owner;
    this.balnce = balnce;
  }
  deposit(amount) {
    return this.balnce=this.balnce+amount
  }
  withdraw(amount) { if(amount<=this.balnce&&amount!=0){
     return  this.balnce=this.balnce - amount
  }
  else{
    return console.log("not enough  in accout")
  }
   
  }
  checkBalance(){
    console.log(this.balnce)
  }

}
let new_obj=new BankAccount("Hammad" , 5000)

new_obj.deposit(500)
new_obj.withdraw(2500)
new_obj.checkBalance()
new_obj.withdraw(-355005)
