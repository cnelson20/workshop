# Cameron Nelson
# SoftDev
# HW - Amalgamate Random Student Name Printer
# 2021-09-27

import random

# List people for periods 1 and 2
pd1 = [    "Owen Yaggy", "Haotian Gan", "Ishraq Mahid", "Ivan Lam", "Michelle Lo","Christopher Liu", "Ivan Mijacika", "Lucas Lee", "Josephine Lee", "Rayat Roy", "Emma Buller", "William Chen", "Rachel Xiao", "Andrew Juang", "Yuqing Wu", "Renggeng Zheng", "Annabel Zhang", "Alejandro Alonso", "Deven Maheshwari", "Oscar Wang", "Tami Takada", "Yusuf Elsharawy", "Ella Krechmer", "Tomas Acuna", "Tina Nguyen", "Theo Fahey", "Sadid Ethun"
]

pd2 = ["Patrick Ging", "Wenhao Dong", "Raymond Yeung", "Kevin Cao", "Michael Borczuk", "Alif Abdullah", "Justin Zou", "Andy Lin", "Shadman Rakib", "David Chong","Daniel Sooknanan", "Cameron Nelson", "Austin Ngan", "Yaying Liang Li", "Eric Guo", "Noakai Aronesty", "Roshani Shrestha", "Yoonah Chang",
    "Qina Liu", "Han Zhang", "Joshua Kloepfer"]


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
