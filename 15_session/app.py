# Red Wings | Daniel Sooknanan, Cameron Nelson, Sophie Liu
# SoftDev
# K15 Flask Session Shenaniganza
# 2021-10-18

import os
from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)    #create Flask object

real_dict = {"username":"password"}

app.secret_key = os.urandom(32);

@app.route("/", methods=['GET', 'POST'])
def welcome():
    if 'username' in session:
        return render_template('response.html')
    elif (request.method == 'POST'):
        username = request.form.get('username')
        password = request.form.get('password')
        if username in real_dict.keys():
            if real_dict[username] == password:
                session['username'] = request.form.get('username')
                return render_template( 'response.html')
            else: 
                return render_template( 'login.html', error = "Password is incorrect")
        else: 
            return render_template( 'login.html', error = "User does not exist")
    else:
        return render_template('login.html') # Redirect users to login if there's no post request to get info from

@app.route("/logout")
def logout():
    session.pop('username', default=None)
    return redirect("/")

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
