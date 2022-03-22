class Error {
  constructor(name, message) {
    this.message = message;
    this.name = name;
  }
}

class NegativeAmountError extends Error {
  constructor(name, message) {
    super(name, message);
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(name, message) {
    super(name, message);
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      // throw new Error("The amount provided cannot be negative"); // Use custom Error class
      throw new NegativeAmountError(
        "NEGATIVE NUMBER ERR:",
        "The amount provided cannot be negative"
      );
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      // throw new Error("The amount provided cannot be negative"); // Use custom Error class
      throw new NegativeAmountError(
        "NEGATIVE NUMBER ERR:",
        "The amount provided cannot be negative"
      );
    }

    if (this.#amount < amount) {
      // throw new Error("You cannot withdraw more than account balance"); // Use custom Error class

      throw new WithdrawNotPermittedError(
        "NOT ENOUGH FOUNDS ERR:",
        "You cannot withdraw more than account balance"
      );
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log("Something went wrong during bank account operations");
  console.log(e.name, e.message);
}
