// eslint-disable-next-line no-undef
const config = require('../config');

// test to check the correct code status of getting a list of warehouses 
test('status should be 200', async () => {
	let actualStatus;
	try {
		 
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`); 
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
      // Check code status
      expect(actualStatus).toBe(200);
});
