class BankAccount {
  #balance;
  constructor(username, balance = 100) { // by default balance have 100 Rs.
    this.username = username;
    this.#balance = balance;
  }

  myBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Enter a valid amount greater than 0");
    }
    this.#balance += amount;
    return `₹${amount} is credited to your account`;
  }

  withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Enter a valid amount greater than 0");
    }
    if (this.#balance < amount) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
    return `₹${amount} is debited from this account`;
  }
}

const username = document.getElementById("username");
const amount = document.getElementById("amount");
const pin = document.getElementById("pin");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

const usernameResult = document.getElementById("usernameResult");
const amountResult = document.getElementById("amountResult");
const transactionMessage = document.getElementById("transactionMessage");

// Account is created ONLY ONCE (on the first valid click) and then reused
let bankAccount = null;

function assignValues(action) {
  let myUsername = username.value.trim().toUpperCase();
  let myAmount = parseFloat(amount.value.trim());
  let myPin = 2005;
  if (parseInt(pin.value.trim()) !== myPin) {
    return alert("Invalid PIN!");
  }
  if (myUsername === "") {
    return alert("Enter the username!");
  }

  // create the account only if it does not exist yet
  if (bankAccount === null) {
    bankAccount = new BankAccount(myUsername);
  }

  let val = undefined;
  try {
    if (action === "deposit") {
      val = bankAccount.deposit(myAmount);
    } else {
      val = bankAccount.withdraw(myAmount);
    }
    transactionMessage.textContent = val;
  } catch (error) {
    transactionMessage.textContent = error.message;
  }

  // display (balance always comes from the object)
  usernameResult.textContent = bankAccount.username;
  amountResult.textContent = `₹${bankAccount.myBalance()}`;
  amount.value = "";
}

depositBtn.addEventListener("click", (e) => {
  e.preventDefault();
  assignValues("deposit");
});

withdrawBtn.addEventListener("click", (e) => {
  e.preventDefault();
  assignValues("withdraw");
});