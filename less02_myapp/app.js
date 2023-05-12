const express = require('express');
const myRouter= require('./my-router');
const app = express();
const port = 3005

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contacts?', (req, res) => {
    res.send('<h1>Contact page</h1>');
});

app.all('/anything', (req, res, next) => {
    console.log('Anything method.');
    next(); // передаем управление дальше
});

app.use((req, res, next) => {
    console.log('Наше промежуточное ПО');
    console.log(req)
    console.log(`_______`)
    next();
    app.use('/my-router', myRouter);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});