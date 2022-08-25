const express = require('express');
const app = express();
const cors = require('cors');
const { members } = require("./members");
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	if (members) {
		res.render('index.ejs', { members });
	} else {
		// respond with status 500 if the members array could not be loaded from members.js
		res.status(500).json({
			error: 'members were not able to be loaded from members.js.'
		});
	}
});

app.get('/api', (req, res) => {
	res.json(members);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();
	
	// filter members array, return items that match query; tag.
	const matches = members.filter((obj) => obj.keywords.some(str => str.toLowerCase().includes(keyword)));

	// if matches were found, respond with matches array in JSON format
	if (matches.length) {
		res.json(matches);
	} else {
		// respond with status 404, no matches were found
		res.status(404).json({
			error: `No members were found with the ${keyword} keyword.`
		});
	}
});

app.listen(PORT, () => {
	console.log(`The server is running on port : ${PORT}, check it out at localhost:8000`);
});
