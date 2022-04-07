function guessGame() {
    let userNumber = alert('Think of a number between 0 and 100!'); 
    let guess = prompt('Is your number > 50 < 50 or == 50 ? Enter: <, > or ==:');
    let min = 0;                             
    let middle = 50;                          
    let max = 100;                              
    while (guess != '==') {    
        if (guess == '>') {                        
            min = middle;                      
            range = max - min;                     
            rangeHalf = range / 2;                  
            rangeHalf = Math.floor(range / 2);      
            let center = min + rangeHalf;           
            middle = center;   
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
        if (guess == '<') {                                
            max = middle                               
            range = max - min;                             
            rangeHalf = range / 2;                         
            rangeHalf = Math.floor(range / 2);             
            let center = min + rangeHalf;                   
            middle = center;
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
    }    
    answer = alert('Your number was: ' + middle + '!!')
}
guessGame()
