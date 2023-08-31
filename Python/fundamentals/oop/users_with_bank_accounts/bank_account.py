class BankAccount:

    def __init__(self, rate, balance=0):
        self.rate = rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        # self.display_account_info()
        return self

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
        # self.display_account_info()
        return self

    def display_account_info(self):
        print('Balance: ${:,.2f}'.format(self.balance))
        print(f'interest rate is: {self.rate * 100}%')
        return self

    def yield_interest(self):
        self.balance *= (1 + self.rate)
        self.display_account_info()
        return self


# account1 = BankAccount(0.01, 100)
# account2 = BankAccount(0.05, 100000)
#
# account1.deposit(20).deposit(20).deposit(20).withdraw(80).yield_interest().display_account_info()
# account2.deposit(1000).deposit(9000).withdraw(500).withdraw(500).withdraw(500).withdraw(
#     500).yield_interest().display_account_info()
