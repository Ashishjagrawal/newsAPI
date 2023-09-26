const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'News API',
            version: '1.0.0',
            description: 'A simple API for fetching news articles',
        },
    },
    apis: ['./routes/*.js'],  // Path to the API routes file(s)
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
