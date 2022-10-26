
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.course = require("./course.model.js")(sequelize, Sequelize);
db.section = require("./section.model.js")(sequelize, Sequelize);
db.semester = require("./semester.model.js")(sequelize, Sequelize);

// foreign key for section
db.course.hasMany(db.section, { as: 'section'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.section.belongsTo(db.course, { as: 'course'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

// foreign key for semester
db.section.hasMany(db.semester, { as: 'semester'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.semester.belongsTo(db.section, { as: 'section'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

// foreign key for tutorials
//db.user.hasMany(db.tutorial, { as: 'tutorial'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
//db.tutorial.belongsTo(db.user, { as: 'user'}, { foreignKey: { allowNull: false }, onDelete: 'CASCADE', });


module.exports = db;