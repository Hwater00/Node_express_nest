const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
  static init(sequelize){
    return super.init({
      email:{
        type: Sequelize.STRING(40),
        allowNull: true,
        unique:true,
      },
      
      nick:{
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      password:{
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      /*provider가 local이면 로컬 로그인을 한 것이고, kakao면 카카오 로그인을 한 것입니다. 
      기본적으로 로컬 로그인이라 가정해서 defaultValue를 local로 주었습니다. */
      provider:{
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },

      snsId:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
    },{
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid:true,
      charset:'utf8',
      collate: 'utf8_general_ci',
    }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
  }
}