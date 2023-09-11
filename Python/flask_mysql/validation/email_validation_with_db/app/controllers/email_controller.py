from flask import request, redirect, render_template
from app import app
from app.models.email import Email


@app.route('/')
def input_email():
    return render_template('index.html')


@app.route('/process_email', methods=['POST'])
def process_email():
    if Email.is_valid(request.form):
        Email.insert_to_db(request.form)
        return redirect('/success')
    return redirect('/')


@app.route('/success')
def success():
    emails = Email.get_all()
    return render_template('success.html', emails=emails)


@app.route('/delete/<int:email_id>')
def delete(email_id):
    Email.delete(email_id)
    return redirect('/success')

