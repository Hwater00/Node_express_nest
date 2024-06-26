const Sequelize = require('sequelize');
const User = require('./user')
const Comment = require('./comment');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

//db라는 객체에 User와 Comment 모델을 담아두었습니다.
db.User = User;
db.Comment = Comment;


// 메서드 호출: init이 실행되어야 테이블이 모델로 연결됩니다. 다른 테이블과의 관계를 연결하는 associate 메서드도 미리 실행
User.init(sequelize);
Comment.init(sequelize);


User.associate(db);
Comment.associate(db);

module.exports = db;
