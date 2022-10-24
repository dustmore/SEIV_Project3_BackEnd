
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      courseId: {
        type: Sequelize.STRING
      },
      CourseNumber: {
        type: Sequelize.STRING
      },
      courseName: {
        type: Sequelize.STRING
      },
      courseHours: {
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
      courseYearly: {
        type: Sequelize.STRING
      },
      courseDescription: {
        type: Sequelize.STRING
      }
    });
    return Course;
  };