const router = require('express').Router();

router.get('/',(req, res)=>{
	res.send('Welcome to users!');
})
router.post('/',(req, res)=>{
	res.send('Welcome to users post request!');
})

module.exports.user = router;