const petController = require("../controllers/mascota");
const competitionController = require("../controllers/concurso");

const createData = async () => {
    console.log("------------- CREANDO MASCOTAS -------------");
    await petController.createMany([
        { name: "Firulais", type: "Perro" },
        { name: "Garfield", type: "Gato" },
        { name: "Piolin", type: "Pajaro" },
        { name: "Bugs Bunny", type: "Conejo" },
        { name: "Mickey Mouse", type: "Raton" },
        { name: "Perry", type: "Ornitorrinco" },
        { name: "Pongo", type: "Perro" },
        { name: "Puchy", type: "Gato" },
        { name: "Tweety", type: "Pajaro" },
        { name: "Lola Bunny", type: "Conejo" },
    ]);

    console.log("------------- CREANDO CONCURSOS -------------");
    await competitionController.createMany([
        { name: "El mejor disfraz" },
        { name: "La cara más graciosa" },
        { name: "La mascota más veloz" },
        { name: "El mejor truco" },
        { name: "La más ruda" },
    ]);

    console.log("------------- ASIGNANDO MASCOTAS -------------");
    await competitionController.addPet(1, 1);
    await competitionController.addPet(1, 2);
    await competitionController.addPet(1, 3);
    await competitionController.addPet(2, 4);
    await competitionController.addPet(2, 5);
    await competitionController.addPet(2, 6);
    await competitionController.addPet(3, 7);
    await competitionController.addPet(3, 8);
    await competitionController.addPet(3, 9);
    await competitionController.addPet(3, 10);
    await competitionController.addPet(4, 1);
    await competitionController.addPet(4, 2);
    await competitionController.addPet(4, 3);
    await competitionController.addPet(4, 4);
    await competitionController.addPet(5, 5);
    await competitionController.addPet(5, 6);
    await competitionController.addPet(5, 7);
    await competitionController.addPet(5, 8);
    await competitionController.addPet(5, 9);
    await competitionController.addPet(5, 10);

    console.log("Datos creados exitosamente");
};

module.exports = createData;
