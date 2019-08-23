const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/snake.html');
});


app.listen(3000, () =>{
    console.log('server listening on port 3000');
});