# Guessing-Game
Beetroot Academy - Lesson 27

“Guess the number” game. 
Suggest a user to think of a number from 0 to 100 and guess it in the following way: 
every loop iteration needs to divide the range of numbers in half, 
you represent the result as N and ask the user “Your number > N, < N or == N?” 

Depending on what the user said, narrow down the range. 
So the starting range is 0 to 100, divided in half is 50. 
If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N.
