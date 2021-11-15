const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));
});
app.listen(port, () =>
  console.log(`Server is running on: <a target="_blank" rel="noopener" href="http://localhost:${port}/">http://localhost:${port}</a>`));