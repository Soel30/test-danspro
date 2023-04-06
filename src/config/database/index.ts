import { Sequelize } from 'sequelize'
import ConfigData from '@config/env'

const sequelize = new Sequelize(
    ConfigData.database.name,
    ConfigData.database.username,
    ConfigData.database.password,
    {
        host: ConfigData.database.host,
        port: ConfigData.database.port,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true,
        },
    }
)

export default sequelize