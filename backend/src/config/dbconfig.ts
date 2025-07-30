import { Sequelize } from 'sequelize';

const databaseConf = {
    nameDb: process.env.DBNAME || '',
    userDb: process.env.DBUSER || '',
    passwordDb: process.env.DBPASSWORD,
    hostDb: process.env.HOST,
    portDb: parseInt(process.env.PORT || '3306')
};
const sequelize = new Sequelize(
    databaseConf.nameDb,
    databaseConf.userDb,
    databaseConf.passwordDb, 
    {
        host: databaseConf.hostDb,
        port: databaseConf.portDb,
        dialect: 'mysql'
    }
);

export default sequelize;