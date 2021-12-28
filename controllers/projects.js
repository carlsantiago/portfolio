const router = require('express').Router();

router.get('/projects', async (req, res) => {
    res.render('projects');
})

module.exports = router;