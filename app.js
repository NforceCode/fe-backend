const express = require('express');
const fs = require('fs').promises;

const PORT = 3000;

const app = express(); //+ server

/* ROUTING: METHOD PATH */

app.get('/', async (req, res) => {
  // console.log('Homepage');
  const page = await fs.readFile('./view/index.html', 'utf8');
  res.send(page);
});
app.get('/about', (req, res) => {
  // console.log('Homepage');
  res.send('About');
});
app.get('*', (req, res) => {
  // console.log('Not Homepage');
  res.send('Not Homepage');
});

app.listen(PORT, ()=>{
  console.log('Server started');
});