from flask import Flask, request, redirect, render_template, session
import random
app = Flask(__name__)
app.secret_key = 'asdf1234'

def random_num():
    session['rdm_num'] = random.randint(0, 101)

@app.route('/')
def main():
    if not 'rdm_num' in session.keys():
        random_num()
    else:
        pass
    return render_template('index.html')


@app.route('/working', methods=["POST"])
def guess():
    guess = int(request.form['guess'])
    if guess == session['rdm_num']:
        session['result'] = 'correct'
    elif guess > session['rdm_num']:
        session['result'] = 'too_high'
    elif guess < session['rdm_num']:
        session['result'] = 'too_low'

    return redirect('/')

@app.route('/reset')
def reset():
    if 'rdm_num' and 'result' in session.keys():
        session.pop('rdm_num')
        session.pop('result')
    else:
        pass
    return redirect('/')


app.run(debug=True)