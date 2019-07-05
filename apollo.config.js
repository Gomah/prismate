require('dotenv').config();

module.exports = {
  service: {
    endpoint: {
      url: process.env.PRISMA_ENDPOINT,
      skipSSLValidation: true, // optional, disables SSL validation check
    },
  },
};
