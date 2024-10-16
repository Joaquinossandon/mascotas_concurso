const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Concurso = sequelize.define("concurso", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Concurso;
