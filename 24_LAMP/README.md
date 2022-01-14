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
/var/www/
├── FlaskApp
│   └── app
│       ├── static
│       └── templates
└── html
    └── index.html
```




### Resources

https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps
https://db.tannercrook.com/lamp-stack-on-ubuntu-server/
---

Accurate as of (last update): 2021-01-12

#### Contributors:  
Cameron Nelson, pd2  
