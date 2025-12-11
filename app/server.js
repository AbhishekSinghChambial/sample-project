const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/', (req, res) => res.send('Hello from Sample Test App!'));

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app; // For tests

