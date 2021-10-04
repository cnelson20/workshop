# Tigers -- Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K10 - flask observations (cont.)
# 2021-10-04

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

# this doesnt have a print statement so presumably nothing will print to the terminal.

#RESULTS

# pretty much the same as v0, guess was correct

