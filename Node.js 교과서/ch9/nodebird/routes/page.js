const express = require('express');

const router = express.Router();



/*
router.use로 라우터용 미들웨어를 만들어 템플릿 엔진에서 사용할 user, followingCount, followerCount, followerIdList 변수를 res.locals로 설정했습니다. 
지금은 각각 null, 0, 0, []이지만 나중에 값을 넣을 것입니다. res.locals로 값을 설정하는 이유는 user, followingCount, followerCount, followerIdList 변수를 모든 템플릿 엔진에서 공통으로 사용하기 때문입니다.
 */
router.use((req,res,next)=>{
  res.locals.user = null;
  res.locals.folloserCount =0;
  res.locals.follerIdList = [];
  next();
})


router.get('/profile',(req,res)=>{
  res.render('profile', { title: '내 정보 - NodeBird' });
});

router.get('/join', (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
});

module.exports = router;