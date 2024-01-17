const { Router } = require('express');
const sqlite = require('sqlite3');

const router = Router();


router.get('/', (req, res) => {
    res.sendFile('/views/products.html', { root: './'});

});

router.post('/', async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    const accessToken = req.body.accessToken;
    const type = req.body.type;

    if(!accessToken){
        res.json(false);
        return;
    }

    const db = new sqlite.Database('./database.db');

    db.run(`INSERT INTO products (name, price, description, image, type) VALUES ('${name}', '${price}', '${description}', '${image}','${type}')`, (err) => {
        if (err) {
            throw err;
        } else {
            res.json(true);
        }
    });
});

router.delete('/api', (req, res) => {
    const id = req.body.id;
    const accessToken = req.body.accessToken;

    if(!accessToken){
        res.json(false);
        return;
    }

    const db = new sqlite.Database('./database.db');

    db.run(`DELETE FROM products WHERE id = ${id}`, (err) => {
        if (err) {
            throw err;
        } else {
            res.json(true);
        }
    });
});

module.exports = router;