// eslint-disable-next-line no-undef
const config = require('../config');

test('ok field should be true', async () => {
    let response;
    try {
		 response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
       
	} catch (error) {
		console.error(error);
	}  
    const data = await response.json();
    console.log(data);
// the response data should be TRUE 
expect(data.ok).toBe(true);

});
