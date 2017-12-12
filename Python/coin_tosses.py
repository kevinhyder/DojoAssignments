import random
def coin_tosses():
    heads = 0
    tails = 0
    for x in range(1, 5001):
        y = random.random()
        y_rounded = round(y)
        if y_rounded == 1:
            heads+= 1
            print "Attempt #", x, "Throwing a coin...", "It's a head!", "Got", heads, "head(s) so far, and", tails, "tail(s) so far."
        else:
            tails+= 1 
            print "Attempt #", x, "Throwing a coin...", "It's a tail!", "Got", heads, "head(s) so far, and", tails, "tail(s) so far."
    print "Ending the program, Thank you!"
coin_tosses()
        