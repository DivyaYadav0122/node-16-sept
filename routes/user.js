const express = require('express');
const userscontroler = require('../controllers/usercontroller')
const router = express.Router();
router.get('/users',(req,res)=>{
    userscontroler.getUser(req,res);
})
router.get('/user/:id',(req,res)=>{
    userscontroler.getParticularUser(req,res)
})
module.exports = router;