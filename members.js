const { json } = require("body-parser");

const members = [
	{
		name: 'Rahul Karda',
		age: '20',
		gender: 'male',
		address: 'Ayodhya Nagar, Bhopal',
		aadharnum: '747746556676',
		keywords: ['rahul', 'karda', 'rahulkarda', 'rahul karda'],
	},
	{
		name: 'Jahnvi Chhabra',
		age: '21',
		gender: 'female',
		address: 'Tirupati Abhinav Homes',
		aadharnum: '123456789123',
		keywords: ['jahnvi', 'chhabra', 'jahnvichhabra', 'jahnvi chhabra'],
	},
	{
		name: 'Kartik Sahu',
		age: '21',
		gender: 'male',
		address: 'Piplani, Bhopal',
		aadharnum: '737266055894',
		keywords: ['kartik', 'sahu', 'kartiksahu', 'kartik sahu'],
	},
	{
		name: 'Om Golhani',
		age: '19',
		gender: 'male',
		address: 'Prabhat Petrol Pump, Bhopal',
		aadharnum: '374727291699',
		keywords: ['om', 'golhani', 'omgolhani', 'om golhani'],
	},
	
	{
		name: 'Raj Raghuwanshi',
		age: '20',
		gender: 'male',
		address: 'Ashoka Garden, Bhopal',
		aadharnum: '839314868452',
		keywords: ['raj', 'raghuwanshi', 'rajraghuwanshi', 'raj raghuwanshi'],
	},
	{
		name: 'Kartik Singh Kushwah',
		age: '20',
		gender: 'male',
		address: 'Gopal Nagar, Bhopal',
		aadharnum: '595036161502',
		keywords: ['kartik', 'singh', 'kushwah', 'kartiksingh', 'kartiksinghkushwah', 'kartik singh kushwah'],
	},
	

	// 	Resource Format - please follow the styling below.
	// 	{
	// 		name: '',
	// 		url: '',
	//		description: '',
	//		explorer: '',
	//		ticker: '',
	// 		keywords: ['']
	// 	},
];

exports.members = members;