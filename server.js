const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/www'));

app.get('/', (req, res) => {
  res.render('index.html').status(200);
});

app.listen(PORT, () => {
  console.log(`Adventures in Japan RPG is live on PORT: ${PORT}`);
});