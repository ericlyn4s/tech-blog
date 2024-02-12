const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintingsz = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
