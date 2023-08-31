x = [ [5,2,3], [15,8,9] ] 
students = [
    {'first_name': 'Michael', 'last_name': 'Bryant'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Andres', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 30} ]


def iterate_dictionary(l):
    for d in l:
        out = ''
        for k, v in d.items():
            if k == 'first_name':
                out += f'{k} - {v}, '
            else:
                out += f'{k} - {v}'

        print(out)


def iterate_dictionary2(key, l):
    for d in l:
        for k,v in d.items():
            if k == key:
                print(v)


def print_info(d):
    for k in d:
        print(len(d[k]), k)
        for item in d[k]:
            print(item)


iterate_dictionary(students)
iterate_dictionary2('first_name', students)
iterate_dictionary2('last_name', students)
print_info(sports_directory)
