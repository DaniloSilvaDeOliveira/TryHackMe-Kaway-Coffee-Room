const { Router } = require('express');
const sqlite = require('sqlite3');
const router = Router();


router.get('/' , (req, res) => {
    res.sendFile('/views/adminManager.html', { root: './'});
});

router.post('/' , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const superAdmin = req.body.superAdmin;
    const accessToken = req.body.accessToken;

    const encriptedPassword = btoa(password);

    const db = new sqlite.Database('./database.db');

    if(accessToken == null){
        res.status(401).json("Unauthorized");
    }
    else{
        const decoded = atob(accessToken).split(':');
        if(decoded[3] == 0){
            res.status(401).json("Unauthorized");
        }
    }
    db.run('INSERT INTO admin (name, password, superAdmin) VALUES (?, ?, ?)', [username, encriptedPassword, superAdmin], (err) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json("success");
        }
    });
});

router.post('/api', (req, res) => {
    const accessToken = req.body.accessToken;

    if(accessToken == null){
        res.status(401).json("Unauthorized");
    }
    else{
        const decoded = atob(accessToken).split(':');
        if(decoded[3] == 0){
            res.status(401).json("Unauthorized");
        }
    }

    const db = new sqlite.Database('./database.db');

    db.all('SELECT * FROM admin', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
});

router.delete('/api', (req, res) => {
    const accessToken = req.body.accessToken;
    const id = req.body.id;

    if(accessToken == null){
        res.status(401).json("Unauthorized");
    }
    else{
        const decoded = atob(accessToken).split(':');
        if(decoded[3] == 0){
            res.status(401).json("Unauthorized");
        }
    }

    const db = new sqlite.Database('./database.db');

    db.run('DELETE FROM admin WHERE id = ?', [id], (err) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json("success");
        }
    });
});

module.exports = router;

