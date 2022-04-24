const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv');

const routes = require('./server/routes/recipeRoutes')

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.set('layout', './layouts/main');

app.use('', routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})