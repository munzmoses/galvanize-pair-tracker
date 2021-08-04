const express = require('express');
const path = require('path');

const pairRouter = require('../db/controllers');
const db = require('../db');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../', 'public')));

app.use('/pairs', pairRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app listening on ${PORT}`));
