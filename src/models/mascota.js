const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Concurso = require("./concurso");

const Mascota = sequelize.define("mascota", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
});

Concurso.belongsToMany(Mascota, {
    through: "mascota_concurso",
});

Mascota.belongsToMany(Concurso, {
    through: "mascota_concurso",
});

module.exports = Mascota;
