'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
