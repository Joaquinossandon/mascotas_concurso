const competitionController = require("../controllers/concurso");
const petController = require("../controllers/mascota");

const execQueries = async () => {
    const comp1 = await competitionController.findById(3);
    console.log(JSON.stringify(comp1, null, 4));

    const masc1 = await petController.findById(1);
    console.log(JSON.stringify(masc1, null, 4));

    console.log(await petController.deleteById(5));
};

module.exports = execQueries;
