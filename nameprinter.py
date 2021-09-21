f = open("names.txt");
text = f.read();
lines = text.split("\n");
i = 1;
while (i < len(lines)):
    curLine = (lines[i]);
    lineSplit = lines[i].split(" ");
    toPrint = "";
    if (len(lineSplit) > 4):
        toPrint = toPrint + lineSplit[4];
        if (len(lineSplit) > 5):
            toPrint = toPrint + " " + lines[i].split(" ")[5];
        print (toPrint);
    i = i + 2;
