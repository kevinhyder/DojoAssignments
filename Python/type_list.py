def type_list(list):
    total_sum = 0
    total_string = ''
    types = []
    for element in list:
        if type(element) not in types:
            types.append(type(element))
        if type(element) is int or type(element) is float:
            total_sum += element
        if type(element) is str:
            total_string += " " + element
    if sum > 0:
        print "Sum:", total_sum
    if len(total_string) > 0:
        print "String:", total_string
    if len(types) == 1:
        print "This list is of", types[0], "type."
    if len(types) > 1:
        print "This list is of mixed types." 

l = [98.98]

type_list(l)