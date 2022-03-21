class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  getAmount() {
    return this.#amount;
  }

  setAmount(amount) {
    this.#amount += amount;
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }

  deposit(newAmount) {
    if (newAmount >= 1000) {
      let interest = (newAmount / 100) * 3;
      newAmount += interest;
      this.setAmount(newAmount);
    } else {
      this.setAmount(newAmount);
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
