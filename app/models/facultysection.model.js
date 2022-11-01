module.exports = (sequelize, Sequelize) => {
    const FacultySection = sequelize.define("facultysection", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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