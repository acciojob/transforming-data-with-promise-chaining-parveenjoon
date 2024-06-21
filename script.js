document.getElementById('btn').addEventListener('click', () => {
    const num = parseInt(document.getElementById('ip').value);

    // Check if input is a valid number
    if (isNaN(num)) {
        document.getElementById('output').textContent = 'Please enter a valid number';
        return;
    }

    // Initial promise that resolves with the input value after 2 seconds
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })
    .then((number) => {
        // Update output with the initial number
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number * 2), 1000);
        });
    })
    .then((number) => {
        // Update output with the multiplied number
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number - 3), 1000);
        });
    })
    .then((number) => {
        // Update output with the subtracted number
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number / 2), 1000);
        });
    })
    .then((number) => {
        // Update output with the divided number
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number + 10), 1000);
        });
    })
    .then((finalResult) => {
        // Update output with the final result
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
        // Handle any errors that may occur during promise chaining
        document.getElementById('output').textContent = `Error: ${error}`;
    });
});
