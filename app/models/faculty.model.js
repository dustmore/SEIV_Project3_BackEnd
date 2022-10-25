
module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define("faculty", {
      facultyId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      facultyFName: {
        type: Sequelize.INTEGER,
      },
      facultyLname: {
        type: Sequelize.STRING
      }
    });
   
    return Faculty;
};