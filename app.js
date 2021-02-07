const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Express app running');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('Demo page');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
