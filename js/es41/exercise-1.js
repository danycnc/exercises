class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount < 0) {
        throw negativeNumberError;
      } else {
        this.#amount += amount;
      }
    } catch (negativeNumberError) {
      return console.log("No negative value ammitted");
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if (amount < 0) {
        throw SyntaxError;
      } else if (amount > this.#amount) {
        throw RangeError;
      } else {
        this.#amount -= amount;
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        return console.log("No negative value ammitted");
      } else {
        return console.log("No enough funds, impossible to withdraw");
      }
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
