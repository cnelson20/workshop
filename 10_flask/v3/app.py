# Tigers -- Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K10 flask observations (continued)
# 2021-10-04

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

#This is the same as v2 except for the "app.debug = True" statement
#normally false debug = off, so presumably this enables is


#results are what we expected

