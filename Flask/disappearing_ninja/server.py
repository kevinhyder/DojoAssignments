from flask import Flask, redirect, request, render_template
app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    ninja = 'tmnt'
    return render_template('ninja.html', ninja = ninja)

@app.route('/ninja/<ninja_color>')
def display_ninja(ninja_color):
    ninja = 'tmnt.png'
    if ninja_color == 'blue':
        ninja = 'leonardo'
    elif ninja_color == 'red':
        ninja = 'raphael'
    elif ninja_color == 'purple':
        ninja = 'donatello'
    elif ninja_color == 'orange':
        ninja = 'michelangelo'
    else:
        ninja = 'notapril'

    return render_template('ninja.html', ninja = ninja)


app.run(debug=True)