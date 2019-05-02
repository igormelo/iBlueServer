var Sequelize = require("sequelize");
// var sequelize = new Sequelize();

module.exports.getSequelize = function () {
    const credentials = {
        db : 'database',
        user: 'root',
        pw:'12345678'
    }
    const sequelize = new Sequelize(credentials.db,credentials.user,credentials.pw, {
        port: 3307,
        host: 'localhost',
        dialect: 'mysql'
    });
    return sequelize;
}

module.exports.verificarConexao = function () {
    sequelize.authenticate()
    .then(() => {
        console.debug('Conexao foi estabelecida')
    })
    .catch((error) => {
        console.error("Nao foi possivel conectar ao banco");
        process.exit();
    });
} 