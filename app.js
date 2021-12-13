const fetchAPI = () => {
	return new Promise((resolve, reject) => {
		const API = 'https://jsonplaceholder.typicode.com/posts';
		const xhr = new XMLHttpRequest();
		xhr.open('GET', API);
		xhr.onload = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
				console.log(xhr.responseText);
			} else {
				reject(xhr.responseText);
			}
		};

		xhr.send();
	});
};
const fetchedData = fetchAPI();
const displayData = async (data) => {
	console.log(await data);
};

displayData(fetchedData);

// const textToBinary = (txt) => {
// 	let output = '';
// 	const splittedTxt = txt.split('');
// 	for (let i = 0; i < splittedTxt.length; i++) {
// 		output += ` ${splittedTxt[i].charCodeAt(0).toString(2)}`;
// 	}
// 	return output;
// };

// //console.log(textToBinary('Hello'));

// const binaryToTxt = (binary) => {
// 	return binary.split(' ').map((char) => String.fromCharCode(parseInt(char, 2)));
// 	// console.log(binaryTxt.fromCharCode(0));
// };

// //console.log(binaryToTxt('1001000 1100101 1101100 1101100 1101111'));

// // displayData()
