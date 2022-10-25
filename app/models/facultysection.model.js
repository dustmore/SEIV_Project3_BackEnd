
module.exports = (sequelize, Sequelize) => {
    const FacultySection = sequelize.define("facultysection", {
      facultySectionId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      facultyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sectionId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
   
    return FacultySection;
};