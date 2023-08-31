from typing import List

import bank_account as ba


class User:

    def __init__(self, first_name, last_name, email, age,
                 accounts: List[ba.BankAccount] = ba.BankAccount(0.05, 500000),
                 is_reward_member=False, gold_card_points=0):

        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_reward_member = is_reward_member
        self.gold_card_points = gold_card_points
        self.accounts = accounts

    def add_account(self, account):
        self.accounts.append(account)
        return self

    def make_deposit(self, amount, account_num=0):
        self.accounts[account_num].deposit(amount)
        return self

    def make_withdrawal(self, amount, account_num=0):
        self.accounts[account_num].withdraw(amount)
        return self

    def display_user_balance(self, account_num):
        print('${:,.2f}'.format(self.accounts[account_num].balance))
        return self

    def transfer_money(self, amount, other_user):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

    def display_info(self):
        print(f'first name: {self.first_name}')
        print(f'last name:  {self.last_name}')
        print(f'email: {self.email}')
        print(f'age: {self.age}')
        print(f'Reward member: {self.is_reward_member}')
        print(f'Gold card points: {self.gold_card_points}')
        return self

    def enroll(self):
        if not self.is_reward_member:
            print("User is enrolled")
            self.is_reward_member = True
        else:
            print("User is already a member")

        return self

    def spend_points(self, amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
        else:
            print(f'{self.first_name} is too broke for this! They only have '
                  f'{self.gold_card_points} points and want to spend {amount} points')
        return self


first_user = User(
    "dustin",
    "Yansberg",
    "abc@123.com",
    33,
    [ba.BankAccount(0.06, 100000)],
    True,
    50
)

second_user = User(
    "Billy",
    "Boggy",
    "abc@123.com",
    103,
    [ba.BankAccount(0.06, 100000)],
    False,
    100
)
# third_user = User(
#     "Jill",
#     "Jacks",
#     "abc@123.com",
#     41,
#     True,
#     42
# )

# first_user.display_info().enroll().spend_points(50).display_info().enroll()
# second_user.enroll().spend_points(80).display_info()
# third_user.display_info().spend_points(43)

first_user.add_account(ba.BankAccount(0.02, 200))

first_user.display_user_balance(0)
second_user.display_user_balance(0)

first_user.transfer_money(500, second_user)

first_user.display_user_balance(0)
second_user.display_user_balance(0)
