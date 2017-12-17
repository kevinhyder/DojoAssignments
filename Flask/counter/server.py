from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'asdf1234'

@app.route('/')
def main():
    if 'count' in session.keys():
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template('index.html')

def by_2():
    session['counter'] += 2
    return render_template('index.html')

def reset():
    session['counter'] = 1
    return render_template('index.html')
app.run(debug=True)