const express = require('express');
const app = express();
const cors = require('cors');
const carsRoute = require('./routes/CarRoute');

app.use(express.json());
app.use(cors());
app.use('/api/cars', carsRoute);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});