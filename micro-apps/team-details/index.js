const express = require('express');

const app = express();

app.use(express.static('client'))

app.listen(3001, () => console.log('Team details app is on port 3001'))