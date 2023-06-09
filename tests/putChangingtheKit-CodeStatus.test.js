// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {

    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]   
}

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
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

