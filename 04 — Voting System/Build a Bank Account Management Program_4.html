class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount: amount });
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount: amount });
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Create an instance named myAccount with required transactions, deposits, withdrawals, and balance > $100
const myAccount = new BankAccount();
myAccount.deposit(200); // Deposit 1
myAccount.deposit(150); // Deposit 2
myAccount.withdraw(50);  // Withdrawal 1
myAccount.withdraw(30);  // Withdrawal 2
myAccount.deposit(100); // Deposit 3 (Total: 5 transactions, Balance: $370)