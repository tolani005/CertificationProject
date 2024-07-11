document.getElementById('convert-btn').addEventListener('click', function() {
    var numberInput = document.getElementById('number').value;
    var outputDiv = document.getElementById('output');

    // Clear previous output
    outputDiv.innerText = "";

    // Check if input is empty or not a number
    if (numberInput === "" || isNaN(numberInput)) {
        outputDiv.innerText = "Please enter a valid number";
        return;
    }

    var number = parseInt(numberInput);

    // Check if number is within valid range
    if (number < 1) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    if (number >= 4000) {
        outputDiv.innerText = "Please enter a number less than 4000";
        return;
    }

    // Function to convert number to Roman numeral
    function convertToRoman(num) {
        var romanNumeral = '';
        var romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        for (var i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                romanNumeral += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return romanNumeral;
    }

    // Convert the number and display the result
    var romanResult = convertToRoman(number);
    outputDiv.innerText = romanResult;
});