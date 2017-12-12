def find_characters(word_list, character):
    new_list = []
    for element in word_list:
        if character in element:
            new_list.append(element)
    print new_list

word_list = ['hello','world','my','name','is','Anna']
character = 'o'

find_characters(word_list, character)