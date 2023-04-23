// eslint-disable-next-line no-undef
const config = require('../config');

// test to check the correct code status of getting a list of warehouses 
getCodeStatus('status should be 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`); 
	} catch (error) {
		console.error(error);
	}
      // Check code status
      expect(actualStatus).toBe(200);
});
