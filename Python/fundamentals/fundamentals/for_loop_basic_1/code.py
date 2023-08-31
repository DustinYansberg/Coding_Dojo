for val in range(150):
    print(val)

for val in range(1000):
    if val % 5 == 0:
        print(val)

for val in range(100):
    if val % 10 == 0:
        print('Coding Dojo')
    else:
        print('Coding')

total = 0
for val in range(500000):
    if val % 2 == 0:
        continue
    total += val
print(total)

for val in range(2018,0,-4):
    print(val)


lowNum, highNum, mult = 2, 9, 3

for val in range(lowNum, highNum+1):
    if val % mult == 0:
        print(val)

