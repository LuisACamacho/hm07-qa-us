// eslint-disable-next-line no-undef
const config = require('../config');

// test to check the correct code status of getting a list of warehouses 
async function getRequest() {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`); 
        const data = await response.json();
        console.log(data);
	} catch (error) {
		console.error(error);
	}
};
getRequest(); 
