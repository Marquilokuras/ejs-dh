const express = require('express');
const app = express();
const mainRouter = require('./routers/main');

app.use(express.static('./public'));
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port, () => {
    console.log('Servidor funcionando ' + port);
});

app.use('/', mainRouter);
app.use('/about', mainRouter);