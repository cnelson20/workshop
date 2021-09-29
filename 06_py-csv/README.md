### Tigers: Sophie Liu, Qina Liu, Cameron Nelson

# K06 Reflection

__csv File reading and parsing:__
- We accessed occupations.csv using `open("occupations.csv)`. This returns a file object, which we can read using `.read()`. Using `.split("\n")`, we assigned each line of the file into an array index. We called this array "lines". 

__Dictionaries:__
- Dictionaries have two values, a key and a value. Each value is assigned to a key, that can be accessed again. 
To create a dictionary of the csv, we used a 2D array of jobs and percentages. The jobs were the keys, while the percentages became the values. By using the dict() constructor, python creates a dictionary with the necessary data. 

__Weighted randomized selection:__
- Python provides a `random.choices()` method that takes two lists of values. The first list is what the random value is picked from, while the other list provides weights for the random selection (provided that it is a number). For example, if you run `random.choices([0, 10], weights = [1, 2])`, 10 is twice as likely to be returned as 0. 
  
__Github markdown:__
- [Guide to markdown](https://guides.github.com/features/mastering-markdown/)
