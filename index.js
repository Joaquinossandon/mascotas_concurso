const sequelize = require("./src/database");
const createData = require("./src/utils/crearDatos");
const execQueries = require("./src/utils/queries");

const main = async () => {
    console.log("Sincronizando base de datos");
    await sequelize.sync({ force: true });
    console.log("Sincronizacion exitosa");

    await createData();

    await execQueries();
};

main();
