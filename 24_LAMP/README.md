# how-to :: Setup a Digital Ocean droplet and install Linux & Apache2
### Estimated Time Cost: _

### Prerequisites:

- Digital Ocean account with payment

#### Setting up Droplet



#### Installing Apache & Flask
Switch to root user before starting this

Run the following commands
```
sudo apt install apache2
sudo apt install libapache2-mod-wsgi python-dev
sudo a2enmod wsgi 
```

#### Creating a Flask App
Run
```
cd /var/www
mkdir FlaskApp
cd FlaskApp/
mkdir app/
cd app/
mkdir static/ templates/

```
Verify you directory struct looks like this:
```
/var/www/ :
├── FlaskApp
│   └── app
│       ├── static
│       └── templates
└── html
    └── index.html
```

Run
```
cd /var/www/FlaskApp/app/
nano __init__.py
```
Nano should open and you should type some basic python flask code 
A suggestion:
```Python
from flask import Flask
app = Flask(__name__)
@app.route("/")
def main():
    return "Hello, World"
    
if __name__ == "__main__":
    app.run()
```

#### Installing Flask
Run:
```
apt install python3-pip
pip install virtualenv
cd /var/www/FlaskApp/app/
virtualenv venv/
source venv/bin/activate
```
The virtual env should appear, then continue on and run:
```
pip install flask
python __init__.py
```
If the normal flask stuff shows up, Ctrl-C and deactivate the virtual env

#### Configure a Virtual Host
Run:
```
cd /etc/apache2/sites-available/
wget grixisutils.site/lamp_tools/FlaskApp.conf
```
See where wget stores the file to, and mv it to `FlaskApp.conf`

`cat FlaskApp.conf` to make sure the conf file is good, if it is run
`sudo a2ensite FlaskApp`.

Run:
```
cd /var/www/FlaskApp/
wget grixisutils.site/lamp_tools/flaskapp.wsgi
```
Make sure you rename the file it saves to `flaskapp.wsgi`

service apache2 restart

### Resources

https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps
https://db.tannercrook.com/lamp-stack-on-ubuntu-server/
---

Accurate as of (last update): 2021-01-12

#### Contributors:  
Cameron Nelson, pd2  
