# Tigers -- Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K10 - flask observations (cont.)
# Oct 2021

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

#this is mostly the same, but the app.run() is within an if statement that checks
#whether the module name = main (file you actually run, not being imported)

#RESULTS

#does what we expected (printed slightly different print statement)
