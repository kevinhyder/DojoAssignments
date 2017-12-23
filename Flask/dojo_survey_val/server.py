from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = 'asdf1234'

@app.route('/')

def main():
    return render_template('index.html')


@app.route('/process', methods=["POST"])

def result():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    form_error = False

    if len(request.form['name']) < 1:
        flash('Please enter a valid name')
        form_error = True
    if len(request.form['comment']) < 1:
        flash('Comment required')
        form_error = True
    if len(request.form['comment']) > 120:
        flash('Comment must be less than 120 characters')
        form_error = True

    if form_error:
        return redirect('/')
    else:
        return render_template('result.html', name = name, location = location, language = language, comment = comment)

app.run(debug=True)