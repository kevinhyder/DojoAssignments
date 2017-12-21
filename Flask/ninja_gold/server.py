from flask import Flask, redirect, request, session, render_template
from datetime import datetime
import random
app = Flask(__name__)
app.secret_key = 'asdf1234'

@app.route('/')
def main():
    if not 'your_gold' in session.keys():
        session['your_gold'] = 0
    if not 'activities' in session.keys():
        session['activities'] = []

    return render_template('index.html')

@app.route('/working', methods=['POST'])
def working():
    choice = request.form['building']
    acc_gold = 0
    mod = 'earned'

    if choice == 'farm':
        acc_gold = random.randint(10,20)
    elif choice == 'cave':
        acc_gold = random.randint(5,10)
    elif choice == 'house':
        acc_gold = random.randint(2,5)
    elif choice == 'casino':
        if session['your_gold'] < 50:
            session['activities'].append('You must have at least 50 gold to go to the casino! ({})'.format(datetime.now()))    
        else:
            acc_gold = random.randint(-50,50)

    if acc_gold < 0:
        mod = 'lost'
        
    mod_gold = abs(acc_gold)
    session['activities'].append('You went to the {} and {} {} gold! ({})'.format(choice, mod, mod_gold, datetime.now()))
    session['your_gold'] += acc_gold
    return redirect('/')

@app.route('/reset')
def reset():
    session['your_gold'] = 0
    session['activities'] = []
    return redirect('/')

app.run(debug=True)
