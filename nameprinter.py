f = open("names.txt");
text = f.read();
lines = text.split("\n");
i = 1;
while (i < len(lines)):
    curLine = (lines[i]);
    print (lines[i].split(" ")[4] +  " " + lines[i].split(" ")[5]);
    i = i + 2;
