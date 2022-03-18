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
    return this.#amount
  }

  setAmount(amount) {
    this.#amount += amount
  }
}

class BankAccountVip extends BankAccount {

  constructor(initialAmount) {
    super(initialAmount)
  }

  deposit(newAmount){
    if (this.getAmount()>100) {
      newAmount+= newAmount/100*3;
      this.setAmount(newAmount)
    }
  }

}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();