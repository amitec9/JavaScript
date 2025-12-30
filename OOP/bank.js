class BankAccount{
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }   
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }           
    getBalance(){
        return this.balance;
    }   

    getAccountInfo(){
        return `Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: $${this.balance}`;
    }       

    setAccountHolder(newHolder){
        this.accountHolder = newHolder;
        console.log(`Account holder name updated to: ${this.accountHolder}`);
    }   


}

// Example usage:
const myAccount = new BankAccount("123456789", "John Doe", 500);
console.log(myAccount.getAccountInfo());
myAccount.deposit(100);
myAccount.withdraw(200);
console.log(`Current Balance: $${myAccount.getBalance()}`);
myAccount.setAccountHolder("Amit kumar");
console.log(myAccount.getAccountInfo());
