const { Router } = require('express');
const sqlite = require('sqlite3');
const router = Router();



router.get('/', (req, res) => {
    res.sendFile('/views/login.html', { root: './'});
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = btoa(req.body.password);


    const db = new sqlite.Database('./database.db');

    db.all('SELECT * FROM admin WHERE name = ? AND password = ?', [username, password], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(rows);
        }
    })
});


router.get('/portal' , (req, res) => {
    res.sendFile('/views/portal.html', { root: './'});
});

router.get('/adminManager', (req, res) => {
    res.sendFile('/views/adminManager.html', { root: './'});
});

module.exports = router;