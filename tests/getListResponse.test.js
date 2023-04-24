// eslint-disable-next-line no-undef
const config = require('../config');
test('test for checking to see all the names of warehouse', async () => {
	let response;
	try {
		 response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	const result = []
	
    const data = await response.json();
    // Iterate through each warehouse
    for (let i = 0; i < data.length; i++) {
        const warehouseName = data[i]["name"];
        // Store all the warehouses name in the array
        result.push(warehouseName);
    }
	console.log(result);  
	//check if all the names of the warehouse is present and spelled correctly;
    expect(result).toEqual(['Everything You Need', 'Fresh Food', 'Food City', 'Big World'])

}); 
