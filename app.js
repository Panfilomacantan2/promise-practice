const fetchAPI = () => {
	return new Promise((resolve, reject) => {
		const API = 'https://jsonplaceholder.typicode.com/posts';
		const xhr = new XMLHttpRequest();
		xhr.open('GET', API);
		xhr.onload = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(xhr.responseText);
			}
		};

		xhr.send();
	});
};

const fetchedData = fetchAPI();
const displayData = async (data) => {
	const awaitedData = await data;
	for (let i = 0; i < awaitedData.length; i++) {
		//console.log(awaitedData[i].title);
		console.log(textToBinary(awaitedData[i].title));
	}
};

displayData(fetchedData);

const textToBinary = (txt) => {
	let output = '';
	const splittedTxt = txt.split('');
	for (let i = 0; i < splittedTxt.length; i++) {
		//console.log(binaryToTxt(splittedTxt[i]));

		output += ` ${splittedTxt[i].charCodeAt(0).toString(2)}`;
	}
	return output;
};

const binaryToTxt = (binary) => {
	return binary.split(' ').map((char) => String.fromCharCode(parseInt(char, 2)));
};

setInterval(() => document.body.innerHTML = new Date().getSeconds(), 1000);

