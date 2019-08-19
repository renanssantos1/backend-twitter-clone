const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(
  'mongodb://goweek:goweek123@ds211268.mlab.com:11268/goweek-backend' , {
  useNewUrlParser: true,
})

app.get('/', (req, res) => {
  return res.send('Hello world')
});

app.listen(3000, () => console.log('Server started on port 3000'));