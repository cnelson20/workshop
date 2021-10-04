# Tigers - Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K06 - Reading & Parsing CSV file 
# 2021-09-28

import random

file = open("occupations.csv");
lines = file.read().split("\n");
del lines[0]; #Remove "Job Class, Percentage" line
split = [];
for i in lines:
    if "," in i:
        #remove quotes, split string into job and %, then convert % to float
        i = i.replace("\"","");
        comma = i.rsplit(",",1);
        comma[1] = float(comma[1]);
        #add to necessary arrays
        split.append(comma);

del split[len(split)-1]; # Remove "Total" as a job
dictionary = dict(split)

# Another array is needed because the numbers are currently being stored as strings. 
numbers = []

for i in dictionary:
    numbers.append(dictionary.get(i));

print(random.choices(list(dictionary), weights=numbers))
#print(list(dictionary));
#print(numbers);
