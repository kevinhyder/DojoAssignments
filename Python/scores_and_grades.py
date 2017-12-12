import random
def scores_and_grades():
    for x in range(1, 10):
        rdm = int((random.random() * 40)  + 60 )
        print "Score:", rdm, ";"
        if rdm >= 90:
            print "Your grade is A"
        if 80 <= rdm < 90:
            print "Your grade is B"
        if 70 <= rdm < 80:
            print "Your grade is C"
        if 60 <= rdm < 70:
            print "Your grade is D"
    print "End of program. Bye!"

scores_and_grades()