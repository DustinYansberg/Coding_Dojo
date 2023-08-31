players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard",
        "age": 33,
        "position": "Point Guard",
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid",
        "age": 32,
        "position": "Power Foward",
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]


class Player:
    player_class_list = []

    @classmethod
    def print_info(cls):
        for item in cls.player_class_list:
            item.print_info1()

    # def __init__(self, name, age, position, team):
    #     self.name = name
    #     self.age = age
    #     self.position = position
    #     self.team = team
    #     Player.player_class_list.append(self)

    def __init__(self, player_dict):
        self.name = player_dict['name']
        self.age = player_dict['age']
        self.position = player_dict['position']
        self.team = player_dict['team']
        Player.player_class_list.append(self)

    def print_info1(self):
        print(
            self.name,
            str(self.age),
            self.position,
            self.team
        )

    @classmethod
    def get_team(cls, team_list):
        player_list = []
        for player in team_list:
            player_list.append(Player(player))
        return player_list


for player in Player.get_team(players):
    player.print_info1()


# player_list = []
# for player in players:
#     player_list.append(Player(player))

# for player in player_list:
#     player.print_info1()

# kevin = Player(players[0])
# jason = Player(players[1])
# kyrie = Player(players[2])
