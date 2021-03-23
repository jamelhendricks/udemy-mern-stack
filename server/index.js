const express = require('express'); // use common modules in node, import x from y in react on the front end
const app = express();

// example route handler w/ express
app.get('/', (req, res) => {

	res.send({ foo: 'bar'});
});

// express tells node which port to listen to
// env var injected by heroku || 5000 by default (locally running)
const PORT = process.env.PORT || 5000;
app.listen(PORT);