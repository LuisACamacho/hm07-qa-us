// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}

test('isItPossibleToDeliver field should be true', async () => {
    let response;
    try {
		response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        
	} catch (error) {
		console.error(error);
	}
    const data = await response.json();
        console.log(data);
    // the response data should be TRUE if the parameter are valid input 
    expect(data.isItPossibleToDeliver).toBe(true);
   
});
