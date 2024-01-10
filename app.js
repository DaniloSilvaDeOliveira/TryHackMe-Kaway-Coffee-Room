const Express = require('express');
const dotenv = require('dotenv');
dotenv.config();



const app = Express();
const port = process.env.PORT || 3000;
//Permite que o express leia o body da requisição no formato JSON
app.use(Express.json());
//define a pasta public como a pasta de arquivos estáticos
app.use(Express.static('public'));

//Importando as rotas
const home = require('./routes/home.js');
const menu = require('./routes/menu.js');
const admin = require('./routes/admin.js');

//Definindo as rotas
app.use('/', home);
app.use('/menu', menu);
app.use('/admin', admin);


//rota que disponibiliza a pasta public para acesso
app.use('/public', Express.static('public'));



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});