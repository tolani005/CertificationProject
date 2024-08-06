
document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    
    const validPatterns = [
        /^\d{10}$/,
        /^1 \d{3}-\d{3}-\d{4}$/,     
        /^1 \(\d{3}\) \d{3}-\d{4}$/,  
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,   
        /^1\(\d{3}\)\d{3}-\d{4}$/,   
        /^1 \d{3} \d{3} \d{4}$/,    
        /^1 \d{3} \d{3} \d{4}$/,
    ];


    const invalidPatterns = [
        /[^0-9()\s\-]/,
        /^1?[\s()]*\d{10}$/,         
        /\d{11,}/,
        /^[^0-9]*$/,                 
        /[^0-9()\s\-]/,
        /\D{10,}/,                   
        /[^0-9() \-]/,             
        /\((?!\d{3}\)).*\d{3}/
    ];

   
    if (input === '') {
        alert('Please provide a phone number');
        resultsDiv.textContent = '';
        return;
    }

    // Validate input
    let valid = false;
    for (const pattern of validPatterns) {
        if (pattern.test(input)) {
            valid = true;
            resultsDiv.textContent = `Valid US number: ${input}`;
            resultsDiv.className = 'valid';
            return;
        }
    }

    // If not valid, check for invalid patterns
    for (const pattern of invalidPatterns) {
        if (pattern.test(input)) {
            resultsDiv.textContent = `Invalid US number: ${input}`;
            resultsDiv.className = 'invalid';
            return;
        }
    }

    resultsDiv.textContent = `Invalid US number: ${input}`;
    resultsDiv.className = 'invalid';
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
    document.getElementById('results-div').className = '';
});