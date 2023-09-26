require("dotenv").config();
const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions');
const newsRoutes = require('./routes')

const app = express();
const port = process.env.PORT || 3000;


// Middleware to parse JSON requests
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", newsRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/**
 * @swagger
 * /api/news/{count}:
 *   get:
 *     summary: Fetch N news articles.
 *     description: Fetches a specified number of news articles.
 *     parameters:
 *       - in: path
 *         name: count
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of news articles to fetch.
 *     responses:
 *       200:
 *         description: Successfully retrieved news articles.
 *       400:
 *         description: Missing count parameter or invalid parameter.
 *       500:
 *         description: Failed to fetch news articles.
 */
// app.get('/api/news/:count', async (req, res) => {
  
// });

// // Get news articles by category
// app.get('/api/news/:category', async (req, res) => {
  
// });

// // Search for news articles by keywords
// app.get('/api/search', async (req, res) => {
  
// });
