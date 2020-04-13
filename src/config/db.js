import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = () => {
    if (db) { return db };

    const { DB_CONNECTION, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

    const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOST,
        dialect: DB_CONNECTION,
        ssl: false,
        logging: false
    });

    db = {
        sequelize,
        Sequelize,
        models: {}
    };

    const dir = path.join(path.dirname(__dirname), 'models');
    fs.readdirSync(dir).forEach(filename => {
        const modelDir = path.join(dir, filename);
        const model = sequelize.import(modelDir);
        db.models[model.name] = model;
    });

    Object.keys(db.models).forEach(key => {
        if ('associate' in db.models[key]) {
            db.models[key].associate(db.models);
        }
    });

    return db;
};