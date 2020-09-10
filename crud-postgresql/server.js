const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./app/routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(routes);

const db = require('./app/models/dbConnect');
db.sequelize.sync({ force: true}).then(() => {
    console.log('All models were synchronized successfully');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server on in port ${PORT}`));

