# Cameron Nelson
# SoftDev
# HW - Amalgamate Random Student Name Printer
# 2021-09-27

import random

# List people for periods 1 and 2
pd1 = ["Emma Buller", "Julia Nelson", "Owen Yaggy", "Haotian Gao", "Ishraq Mahid", "Raymond Yeung", "Kevin Cao", "Ivan Lam", "Michelle Lo"]
pd2 = ["Jesse Xie", "Rachel Xiao", "Yuqing Wu", "Liesel Wong", "Josephine Lee", "Patrick Ging", "Yaying Liang", "Shadman Rakib", "Cameron Nelson", "Eric Guo", "Daniel Sooknanen", "Andy Lin"]

def printRandomName(arr):

    #get random name from array
    randomIndex = random.randrange(0, len(arr))
    randomName = arr[randomIndex]
    
    print(randomName)

def main(): 
    printRandomName(pd1)
    printRandomName(pd2)

if (__name__ == "__main__"):
    main();
