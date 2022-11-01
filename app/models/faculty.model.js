module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define("faculty", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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