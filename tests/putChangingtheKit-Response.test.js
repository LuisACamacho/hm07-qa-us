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

test('ok field should be true', async () => {
   let response;
    try {
		 response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
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
    //the response data should be TRUE if the kit exists and parameters are valid in the request body
   expect(data.ok).toBe(true);
    
}); 

