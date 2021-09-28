# Tigers - Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K06 - Reading & Parsing CSV file 
# 2021-09-28
#
#

import random

file = open("occupations.csv");
lines = file.read().split("\n");
del lines[0];
splitlines = [];
listjobs = [];
for i in lines:
    if "," in i:
        i = i.replace("\"","");
        comma = i.rsplit(",",1);
        comma[1] = float(comma[1]);
        listjobs.append(comma[0]);
        splitlines.append(comma);

del listjobs[len(listjobs)-1];
jobs = dict(splitlines);

randomNum = random.random() * jobs['Total'];
for i in listjobs:
    if randomNum < jobs[i]:
        print(i);
        break;
    else:
        randomNum -= jobs[i];
