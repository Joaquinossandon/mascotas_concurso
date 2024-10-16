const Concurso = require("../models/concurso");
const Mascota = require("../models/mascota");

const create = async (concurso) => {
    const createdCompetition = await Concurso.create(concurso);
    return createdCompetition;
};

const createMany = async (concursos) => {
    const createdCompetitions = await Concurso.bulkCreate(concursos);
    return createdCompetitions;
};

const findById = async (id) => {
    const foundCompetition = await Concurso.findByPk(id, {
        include: [Mascota],
    });
    return foundCompetition;
};

const updateById = async (id, newInfo) => {
    const competition = await Concurso.update(newInfo, {
        where: {
            id,
        },
    });

    return competition;
};

const deleteById = async (id) => {
    const deleteCount = await Concurso.destroy({
        where: {
            id,
        },
    });

    return deleteCount;
};

const addPet = async (idCompetition, idPet) => {
    const competition = await Concurso.findByPk(idCompetition);
    const pet = await Mascota.findByPk(idPet);
    await competition.addMascota(pet);
};

module.exports = {
    create,
    createMany,
    findById,
    updateById,
    deleteById,
    addPet,
};
