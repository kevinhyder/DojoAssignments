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

@app.route('/bytwo', methods = ["POST"])
def by_2():
    session['count'] += 1
    return redirect('/')

@app.route('/reset',methods = ["POST"])
def reset():
    session['count'] = 0
    return redirect('/')
app.run(debug=True)