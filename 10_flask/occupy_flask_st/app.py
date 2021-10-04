# Tigers - Cameron Nelson, Sophie Liu, Qina Liu
# SoftDev
# K06 - Reading & Parsing CSV file 
# 2021-09-28

import random
from flask import Flask
app = Flask(__name__);

@app.route("/")
def hello_world():
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
    
    html = "<h2> Tigers -- Cameron Nelson, Sophie Liu, Qina Liu </h2><hr>";
    
    html += "Random Weighted Job: " + (random.choices(list(dictionary), weights=dictionary.values()))[0] + "<br><br><br>";
    
    html += "<table> <tr> <th> Job </th> <th> Percentage </th> </tr>";
    for i in list(dictionary):
        html += "<tr>";
        html += ("<td>" + i + "&nbsp;&nbsp;&nbsp;</td>");
        html += ("<td>" + str(dictionary[i]) + "% </td>");
        html += "</tr>";
        
    return html;

app.run();
