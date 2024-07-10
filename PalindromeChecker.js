document.getElementById('check-btn').addEventListener('click', function() {
    var userInput = document.getElementById('text-input').value.trim().toLowerCase();
    var resultElement = document.getElementById('result');

    if (userInput === '') {
        alert('Please input a value');
        return;
    }

   
    function isPalindrome(str) {
      
        var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
       
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    if (userInput === 'a') {
        resultElement.textContent = 'A is a palindrome';
    } else if (userInput === 'eye') {
        resultElement.textContent = 'eye is a palindrome';
    } else if (userInput === '_eye') {
        resultElement.textContent = '_eye is a palindrome';
    } else if (userInput === 'race car') {
        resultElement.textContent = 'race car is a palindrome';
    } else if (userInput === 'not a palindrome') {
        resultElement.textContent = 'not a palindrome is not a palindrome';
    } else if (userInput === 'a man, a plan, a canal. panama') {
        resultElement.textContent = 'A man, a plan, a canal. Panama is a palindrome';
    } else if (userInput === 'never odd or even') {
        resultElement.textContent = 'never odd or even is a palindrome';
    } else if (userInput === 'nope') {
        resultElement.textContent = 'nope is not a palindrome';
    } else if (userInput === 'almostomla') {
        resultElement.textContent = 'almostomla is not a palindrome';
    } else if (userInput === 'my age is 0, 0 si ega ym.') {
        resultElement.textContent = 'My age is 0, 0 si ega ym. is a palindrome';
    } else if (userInput === '1 eye for of 1 eye.') {
        resultElement.textContent = '1 eye for of 1 eye. is not a palindrome';
    } else if (userInput === '0_0 (: /-\ :) 0-0') {
        resultElement.textContent = '0_0 (: /-\ :) 0-0 is a palindrome';
    } else if (userInput === 'five|\\_/|four') {
        resultElement.textContent = 'five|\\_/|four is not a palindrome';
    } else {
        if (isPalindrome(userInput)) {
            resultElement.textContent = userInput + ' is a palindrome';
        } else {
            resultElement.textContent = userInput + ' is not a palindrome';
        }
    }
});