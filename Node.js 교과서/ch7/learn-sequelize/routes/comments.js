const express = require('express');
const {User, Comment} = require('../models');

const router = express.Router();

router.post('/', async(req,res,next)=>{
  try{
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    res.staus(201).json(comment);
  }catch(err){
    console.error(err);
    next(err);
  }
});

router.route('/:id')
.patch(async(req,res,next)=>{
  try{
    const result = await Comment.update
    (
      {comment: req.body.comment,},
      {wher:{id: req.params.id},}
    );
    res.json(result);
  }catch(err){
    console.err(err);
    next(err);
  }
})
.delete(async (req,res,next)=>{
  try{
    const result = await Comment.destory({where:{id:req.params.id}});
    res.json(result);
  }catch(err){
    console.error(err);
    next(err);
  }
});

module.exports = router;
