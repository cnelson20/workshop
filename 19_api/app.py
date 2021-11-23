#from flask import Flask
import urllib3, json
from flask import Flask, render_template

http = urllib3.PoolManager()

app = Flask(__name__)

@app.route("/")
def index():
    r = http.request('GET',"https://api.nasa.gov/planetary/apod?api_key=OxKt5dCdwHShy1dTZraFk9cx3A6oboh2bTRJKkCO");
    if r.status == 200:
        dic = json.loads(r.data);
        print(dic);
        return render_template("main.html",pictureurl = dic.get('url'));
    return render_template("main.html",error=("Api returned status" + str(r.status)));


if __name__ == "__main__":
    app.debug = True;
    app.run()