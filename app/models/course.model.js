
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      courseId: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
