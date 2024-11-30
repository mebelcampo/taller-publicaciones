'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publicaciones',[
      {
        titulo:"carlos",
        contenido:"lenguaje para creacion de backed en js",
        autor:"carlinho navinñha",
        fecha: new Date(),
        createdAt:new Date(),
        updatedAt:new Date(),
      },
        {
        titulo:"eduardo",
        contenido:"lenguaje para creacion de backed en js",
        autor:"Eduardinho navinñha",
        fecha: new Date(),
        createdAt:new Date(),
        updatedAt:new Date(),
        }
    ],{}) // ,{} esperaa registros.
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Publicaciones',null,{})
  }
};
