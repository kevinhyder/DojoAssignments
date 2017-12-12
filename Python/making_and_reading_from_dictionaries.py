def read_dictionary(dictionary):
    for item in dictionary:
        print 'My {} is {}'.format(item, dictionary[item])
me = {
    'name': 'Kevin',
    'age': 38,
    'country of birth': 'USA',
    'favorite language': 'JavaScript'
    }
read_dictionary(me)