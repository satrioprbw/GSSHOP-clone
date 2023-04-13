'use strict';

const { default: slugify } = require('slugify');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = require('../data/products.json').map(el => {
      return {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
        slug: slugify(el.name)
      }
    })
    await queryInterface.bulkInsert('Products', products, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
