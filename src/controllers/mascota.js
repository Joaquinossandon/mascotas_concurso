const Concurso = require("../models/concurso");
const Mascota = require("../models/mascota");

const create = async (mascota) => {
    const createdPet = await Mascota.create(mascota);
    return createdPet;
};

const createMany = async (mascotas) => {
    const createdPets = await Mascota.bulkCreate(mascotas);
    return createdPets;
};

const findById = async (id) => {
    const foundPet = await Mascota.findByPk(id, {
        include: [Concurso]
    });
    return foundPet;
};

const updateById = async (id, newInfo) => {
    const pet = await Mascota.update(newInfo, {
        where: {
            id,
        },
    });

    return pet;
};

const deleteById = async (id) => {
    const deleteCount = await Mascota.destroy({
        where: {
            id,
        },
    });

    return deleteCount;
};

module.exports = {
    create,
    createMany,
    findById,
    updateById,
    deleteById,
};
