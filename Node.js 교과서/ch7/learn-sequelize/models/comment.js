// models/comment.js
const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        // Comment 테이블은 User에게 속해있다.
        // belongsTo에선 sourceKey가 아니라 targetKey이다. target, 즉 남의 키.
        // foreignKey는 대신 똑같습니다. User 테이블 입장에서도 foreignKey는 commenter이고 Comment 테이블 입장에서도 foreignKey는 commenter이다.
        // 다만, commenter 컬럼은 어떤 테이블에 추가되느냐. belongsTo가 있는 테이블에 컬럼으로 추가된다.
        // db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
        // 이렇게 옵션을 더 추가할 수도 있는데 여기선 굳이 사용하지 않습니다.
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
    }
};