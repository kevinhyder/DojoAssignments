from flask import Flask, redirect, request, render_template, session, flash
import re
app = Flask(__name__)
app.secret_key = 'asdf1234'

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():

    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    session['password'] = request.form['password']
    session['confirm_password'] = request.form['confirm_password']

    validation_error = False

    if len(session['first_name']) < 1:
        flash('First Name is required!', 'error')
        validation_error = True
    elif session['first_name'].isalpha() == False:
        flash('First Name may contain letters only.', 'error')
        validation_error = True
    
    if len(session['last_name']) < 1:
        flash('Last Name is required!', 'error')
        validation_error = True
    elif session['last_name'].isalpha() == False:
        flash('Last Name may contain letters only.', 'error')
        validation_error = True

    if len(session['email']) < 1:
        flash('Email is required!', 'error')
        validation_error = True
    elif not EMAIL_REGEX.match(session['email']):
        flash('Please enter a valid email address.', 'error')
        validation_error = True

    if len(session['password']) < 1:
        flash('Password is required!', 'error')
        validation_error = True
    elif len(session['password']) < 8:
        flash('Password must be at least 8 characters.', 'error')
        validation_error = True
    elif session['password'] != session['confirm_password']:
        flash('Passwords do not match.', 'error')
        validation_error = True

    if len(session['confirm_password']) < 1:
        flash('Confirm Password required!', 'error')
        validation_error = True

    if validation_error == True:
        return redirect('/')
    else:
        return render_template('result.html')



app.run(debug=True)