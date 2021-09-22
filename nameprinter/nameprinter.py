import random 

pd1 = [];
pd2 = [];

f = open("names.txt");
text = f.read();
lines = text.split("\n");
i = random.randint(0,int(len(lines)/2))*2-1;
curLine = (lines[i]);

lineSplit = lines[i].split(" ");
toPrint = "";
if (len(lineSplit) > 4):
    toPrint = toPrint + lineSplit[4];
    if (len(lineSplit) > 5):
        toPrint = toPrint + " " + lines[i].split(" ")[5];
        print (toPrint);

