const Express = require('express');

const app = Express();
const port = 8000;

app.use(Express.json());

app.use(Express.static('public'));

const home = require('./routes/home.js');
const menu = require('./routes/menu.js');
const admin = require('./routes/admin.js');
const manager = require('./routes/manager.js');
const products = require('./routes/products.js');
const system = require('./routes/system.js');

app.use('/', home);
app.use('/menu', menu);
app.use('/admin', admin);
app.use('/manager', manager);
app.use('/products', products);
app.use('/system', system);

app.use('/public', Express.static('public'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);