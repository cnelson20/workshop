import random

file = open("occupations.csv");
lines = file.read().split("\n");
splitlines = [];
listjobs = [];
for i in lines:
    if "," in i:
        i = i.replace("\"","");
        comma = i.rsplit(",",1);
        listjobs.append(comma[0]);
        splitlines.append(comma);

del splitlines[0];
del listjobs[0];
del listjobs[len(listjobs)-1];
jobs = dict(splitlines);

randomNum = random.random() * float(jobs['Total']);
for i in listjobs:
    if randomNum < float(jobs[i]):
        print(i);
        break;
    else:
        randomNum -= float(jobs[i]);
