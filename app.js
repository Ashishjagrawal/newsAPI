require("dotenv").config();
const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions');
const newsRoutes = require('./routes')

const app = express();
const port = process.env.PORT || 3000;


// Middleware to parse JSON requests
app.use(express.json());
// Middleware to serve swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// news routes
app.use("/api", newsRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

