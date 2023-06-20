// 1. a. A date function that returns current day of the week

function getDayOfWeek(dateString) {
	const date = new Date(dateString);
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayOfWeekIndex = date.getDay();
	return daysOfWeek[dayOfWeekIndex];
}

// 1. b. implementation of the function to display the day of current date
const date = new Date();
const dayOfWeek = getDayOfWeek(date);
console.log('\n Today is ', dayOfWeek);

// 2. a.
function squareRootOfSumOfNumbersArray(numbers) {
	const sumOfNumbersArray = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
	const squareRoot = Math.sqrt(sumOfNumbersArray);
	return squareRoot;
}

// 2. b.
const numbers = [3, 8, 3, 4, 5];
const sqroot = squareRootOfSumOfNumbersArray(numbers);
console.log('\n The square root of given numbers is ', sqroot);

// 3. a.
function isPrime(number) {
	// 1 and numbers less than 1 are not prime
	if (number <= 1) {
		return false;
	}

	// Check for divisibility from 2 to the square root of the number
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

// 3. b.

const number = 17;
const result = isPrime(number);
console.log(result); // Output: true

// 4. a.
function openWindow(url, width, height) {
	const windowFeatures = `width=${width},height=${height}`;
	window.open(url, '_blank', windowFeatures);
}

// 4. b.
const url = 'https://example.com';
const width = 800;
const height = 600;
openWindow(url, width, height);

// 5. a.

// 5. b.

// 6. a.
function getUserLocation() {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					resolve({ latitude, longitude });
				},
				(error) => {
					reject(error);
				}
			);
		} else {
			reject(new Error('Geolocation is not supported by this browser.'));
		}
	});
}

// 6. b.
getUserLocation()
	.then((location) => {
		console.log('Latitude:', location.latitude);
		console.log('Longitude:', location.longitude);
	})
	.catch((error) => {
		console.error('Error:', error.message);
	});

// 7-13 questions are on html   files

// 14.
function sendGetRequest() {
	const url = 'https://api.example.com/data';

	fetch(url)
		.then((response) => {
			if (response.ok) {
				// Request was successful
				return response.json();
			} else {
				// Request was not successful
				throw new Error('Request failed with status ' + response.status);
			}
		})
		.then((responseData) => {
			// Handle the response data here
			console.log(responseData);
		})
		.catch((error) => {
			console.error('Request failed:', error);
		});
}
