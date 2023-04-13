'use strict';
const {
  Model
} = require('sequelize');
const slugify = require('slugify')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User, {foreignKey: 'authorId'})
      Product.belongsTo(models.Platform, {foreignKey: 'platformId'})
      Product.hasMany(models.Image, {foreignKey: 'productId', onDelete: 'CASCADE', hooks: true})
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required'
        },
        notEmpty: {
          msg: 'Name is required'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Slug is required'
        },
        notEmpty: {
          msg: 'Slug is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        notEmpty: {
          msg: 'Description is required'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Genre is required'
        },
        notEmpty: {
          msg: 'Genre is required'
        }
      }
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Publisher is required'
        },
        notEmpty: {
          msg: 'Publisher is required'
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Main Image is required'
        },
        notEmpty: {
          msg: 'Main Image is required'
        }
      }
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Release Date is required'
        },
        notEmpty: {
          msg: 'Release Date is required'
        }
      }
    },
    platformId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  // Product.beforeCreate(el => {
  //   el.slug = slugify(el.name)
  // } )
  return Product;
};