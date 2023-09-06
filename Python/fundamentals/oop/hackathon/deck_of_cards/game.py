import random

from classes.deck import Deck
from classes.player import Player

deck = Deck()
deck.shuffle_deck()
curr_card = deck.deal()

players = [Player(input("What is the name of the first player?\n")),
           Player(input("What is the name of the second player?\n"))]
first_player = random.randint(0, 1)
second_player = 0 if first_player == 1 else 1

print(f'Welcome, {players[0].name} and {players[1].name}\n'
      f'The game is simple.\n'
      f'try to guess accurately if the next card in the deck is higher or lower.\n'
      f'If you guess correctly, you get to guess again.\n'
      f'If you guess incorrectly, the play passes to the next player.\n\n'
      f'You win the game by guessing 26 cards correctly.\n\n\n'
      f'By random draw, {players[first_player].name}, you will start.\n\n\n'
      f'The first card is a {curr_card.card_info()}\n')


highest_points = 0
curr_player = players[first_player]

while highest_points < 26:
    next_card = deck.deal()
    guess = input(f'{curr_player.name}, Is the next card higher [h] or lower [l]?\n')



