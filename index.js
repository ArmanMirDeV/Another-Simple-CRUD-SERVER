const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`Another simple crud server is listening on port ${port}`);
    
})