const express = require('express'),
      bodyParser = require('body-parser'),
      cars = require('./carData.json'),
      port = process.env.PORT || 3005,
      cors = require('cors'),
      app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/api/cars', (req, res) => {
    res.status(200).send(cars)
})

app.listen(port, () => console.log(`Listening on port ${port}`));