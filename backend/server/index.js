const express = require('express');
const app = require('./server.js');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
