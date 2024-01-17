const { Router } = require('express');
const { exec } = require('child_process');


const router = Router();

router.get('/', (req, res) => {
    res.sendFile('/views/system.html', { root: './'});

});

router.post('/run', async (req, res) => {
    let command = req.body.input;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(stdout);
    });
});
module.exports = router;