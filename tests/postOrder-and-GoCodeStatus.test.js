// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}
// test to check the correct code status of getting delivery calculation for courier "Order and GO".
test('status should be 200', async () => {
    let actualStatus; 
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    // Check code status 
    expect(actualStatus).toBe(200);
});
