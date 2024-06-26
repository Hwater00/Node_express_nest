// models/user.js
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        // User가 Comment를 많이 갖고있다는 뜻임
        // foreignKey: User의 foreignKey면 내가 아니라 남이잖아요? 즉 User 입장에서 남이면 Comment죠?
        // Comment의 commenter라는 컬럼이 내 sourceKey - id를 참조하고 있다 이렇게 보시면 됩니다.
        // sourceKey가 나, foreignKey가 남.
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' }); // 정리하자면 User의 id를 Comment 테이블의 commenter라는 남의 컬럼이 참조하고 있다.
                                                                                   // '내'가 누군지 '남'이 누군지를 정확히 파악할 필요가 있습니다.
    }
};

