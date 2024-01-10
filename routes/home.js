const { Router } = require('express');

const router = Router();



router.get('/', (req, res) => {
    
    res.sendFile('/views/home.html', { root: './'});
    
});


module.exports = router;