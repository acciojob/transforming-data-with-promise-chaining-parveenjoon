//your JS code here. If required.
document.getElementById('btn').addEventListener('click',() => {
	const num=parseInt(document.getElementById('ip').value);
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
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number * 2), 1000);
        });
    })
    .then((number) => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number - 3), 1000);
        });
    })
    .then((number) => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number / 2), 1000);
        });
    })
    .then((number) => {
        document.getElementById('output').textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number + 10), 1000);
        });
    })
    .then((finalResult) => {
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
        document.getElementById('output').textContent = `Error: ${error}`;
    });
});