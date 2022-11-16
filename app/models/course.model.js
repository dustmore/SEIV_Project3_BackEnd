module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      courseNumber: {
        type: Sequelize.STRING
      },
      courseName: {
        type: Sequelize.STRING
      },
      courseHour: {
        type: Sequelize.STRING
      },
      courseLevel: {
        type: Sequelize.STRING
      },
      courseRestrict: {
        type: Sequelize.STRING
      },
      courseYearly: {
        type: Sequelize.STRING
      },
      courseSession: {
        type: Sequelize.STRING
      },
      courseDescription: {
        type: Sequelize.STRING
      }
    });
    return Course;
  };
