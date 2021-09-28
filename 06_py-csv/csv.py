import random

file = open("occupations.csv");
lines = file.read().split("\n");
splitlines = [];
for i in lines:
    if "," in i:
        i = i.replace("\"","");
        splitlines.append(i.rsplit(",",1));

del splitlines[0];
splitlines.pop();
jobs = dict(splitlines);

randomNum = random.random()*100;

print(jobs);
