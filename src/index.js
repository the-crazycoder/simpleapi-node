const express = require('express')();
const cors = require('cors');
const log = require('morgan');
require('dotenv').config();

express.use(cors());
express.use(log());

express.get('/', (req, res) => {
	res.send('<h1 style="font-family: \'sans-serif\'">Hello</h1> "');
});

express.listen(process.env.PORT | 5000, () => console.log())
