const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshrit: 'tee',
    size: 'large'
  })
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(418).send({message:'we need a name'})
  }

  res.send({
    tshrit: `${name} and ${id}`,
  });
});