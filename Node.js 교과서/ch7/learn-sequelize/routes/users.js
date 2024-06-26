const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.route('/')
.get(async(req,res,next)=>{
  try{
    const users = await User.findAll();
    res.json(users);
  }catch(err){
    console.error(err);
    next(err);
  }
})
.post(async(req,res,next)=>{
  try{
    const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      married:req.body.married,
    });
    console.log(user);
    res.status(201).json(user);
  }catch(err){
    console.err(err);
    next(err);
  }
});


// include 옵션에서 model 속성에는 User 모델을, where 속성에는 :id로 받은 아이디 값을 넣었습니다.
// . GET /users/1/comments라면 사용자 id가 1인 댓글을 불러옵니다.
router.get('/:id/comments', async(req,res,next)=>{
  try{
    const comments = await Comment.findAll({
      include:{
        model: User,
        where:{id:req.params.id},
      }
    })
  } catch (err){
    console.error(err);
    next(err);
  }
});

module.exports = router