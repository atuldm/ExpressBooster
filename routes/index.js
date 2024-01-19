const router = require('express').Router();

router.get('/', (req, res) => {
	res.send(`<h1>Welcome to ExpressBooster!</h1>`);
});

router.get('/home',(req, res)=>{
	res.send('Welcome to home!');
})

router.get('/about',(req, res)=>{
	res.send('Welcome to about!');
})

module.exports = router;