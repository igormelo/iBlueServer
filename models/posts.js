const Sequelize = require('sequelize');
const conn = require('../infra/connection');

const connection = conn.getSequelize()

const postagens = connection.define('posts', {
        id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'id',
                allowNull: false
        },
        nome: {
                type: Sequelize.STRING(100),
                field: 'nome',
                allowNull: false
        },
        post: {
                type: Sequelize.STRING(300),
                field: 'post',
                allowNull: false
        }
},
        {
                freezeTableName: true,
                timestamps: false,
                tableName: 'posts'
        }
)

exports.getPosts = postagens