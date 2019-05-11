const Sequelize = require('sequelize');
// Tín
//const url = process.env.DATABASE_URL || 'postgres://postgres:220515@localhost:5432/GroupStudy'
//Trường
//const url = process.env.DATABASE_URL || 'postgres://postgres:truongap21@localhost:5432/GroupStudy'
//qtruongdeptrai
const url = process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5433/GroupStudy'
const db = new Sequelize(url);


module.exports = db;