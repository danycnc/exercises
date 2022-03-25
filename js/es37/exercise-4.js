class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }

  deposit(value) {
    this.amount += value;
  }

  withdraw(value) {
    this.amount -= value;
  }

  view() {
    console.log(`Current amount is: ${this.amount}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
