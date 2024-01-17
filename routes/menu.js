const { Router } = require('express');
const sqlite = require('sqlite3');



const router = Router();


router.get('/', (req, res) => {
    res.sendFile('/views/menu.html', { root: './'});

});

router.get('/api', (req, res) => {
    const db = new sqlite.Database('./database.db');
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;