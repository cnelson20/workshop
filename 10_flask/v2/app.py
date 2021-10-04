# Tigers -- Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K10 - flask observations (cont.)
# Oct 2021

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.run()

# This one has another print statement, should print to terminal server is running on with hello_world's name
#RESULTS

#it printed it in the terminal, but the name was actually __main__ not hello world or the func name. 
