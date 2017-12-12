# Part I
def draw_stars(list):
    for num in range(0, len(list)):
        print '*' * list[num]
x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

# Part 2
def draw_stars_and_letters(list):
    for num in range(0, len(list)):
        if type(list[num]) == int:
            print '*' * list[num]
        if type(list[num]) == str:
            print list[num][0].lower() * len(list[num])
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars_and_letters(x)