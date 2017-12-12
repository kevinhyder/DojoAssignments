# Odd / Even
def odd_even():
    for x in range(1, 2001):
        print "Number is", x, "."
        if x % 2 == 0:
            print "This is an even number."
        else:
            print "This is an odd number."

odd_even()

# Multiply
def multiply(a, b):
    for x in range(len(a)):
        a[x] *= b
    return a

a = [2,4,10,16]
b = multiply(a, 5)
print b

# Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for element in arr:
        new_array.append( [1] * element )
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
