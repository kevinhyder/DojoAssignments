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
        typeStr = "string"
        if types[0] is int:
            typeStr = "integer"
        if types[0] is float:
            typeStr = "float"
        if types[0] is list:
            typeStr = "list"
        print "This list is of", typeStr, "type."
    else:
        print "This list is of mixed types." 
