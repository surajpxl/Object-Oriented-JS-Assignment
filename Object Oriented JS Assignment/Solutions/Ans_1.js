class BankAccount {
  // Constructor to initialize the account with a starting balance
  constructor(initialBalance = 0) {
    // Ensure the initial balance is non-negative
    if (initialBalance < 0) {
      console.log("Initial balance cannot be negative. Setting balance to 0.");
      this.balance = 0;
    } else {
      this.balance = initialBalance;
    }
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: Rs.${amount}. New balance: Rs.${this.balance}`);
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (this.balance - amount < 0) {
      console.log("Insufficient funds. Withdrawal cannot be processed.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew: Rs.${amount}. New balance: Rs.${this.balance}`);
  }

  // Method to check the current balance
  checkBalance() {
    console.log(`Current balance: Rs.${this.balance}`);
    return this.balance;
  }
}

// Example 
const myAccount = new BankAccount(100); // Initial balance of Rs.100
myAccount.checkBalance(); // Check initial balance
myAccount.deposit(50);    // Deposit Rs.50
myAccount.withdraw(30);   // Withdraw Rs.30
myAccount.withdraw(200);  // Attempt to withdraw more than available balance
myAccount.deposit(-20);   // Attempt to deposit a negative amount
