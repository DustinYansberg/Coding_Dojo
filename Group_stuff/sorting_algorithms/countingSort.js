/*function CountingSort(input, k)
    
    count ← array of k + 1 zeros
    output ← array of same length as input
    
    for i = 0 to length(input) - 1 do
        j = key(input[i])
        count[j] = count[j] + 1

    for i = 1 to k do
        count[i] = count[i] + count[i - 1]

    for i = length(input) - 1 down to 0 do
        j = key(input[i])
        count[j] = count[j] - 1
        output[count[j]] = input[i]

    return output
    */