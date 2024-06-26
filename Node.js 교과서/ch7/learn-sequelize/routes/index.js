const express = require('express');
const User = require('../models/user');;

const router = express.Router();

router.get('/', async(req,res,next)=>{
  try{
    const users = await User.findAll();
    res.render('sequelize', {users}); // render란? 클라이언트 html 관련
  }catch (err){
    console.err(err);
    next(err);
  }
});

module.exports = router;