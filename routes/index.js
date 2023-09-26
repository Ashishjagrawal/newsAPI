/**
 * @swagger
 * tags:
 *   name: News
 *   description: API endpoints for fetching news articles
 */

const express = require("express");
const router = express.Router();

const { getNewsArticlesByCount, getNewsArticlesByCategory, searchNewsArticles } = require("../controllers");


/**
 * @swagger
 * /api/news/{count}:
 *   get:
 *     summary: Fetch N news articles.
 *     description: Fetches a specified number of news articles. 
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: count
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of news articles to fetch.
 *         example: 10, 15 
 *     responses:
 *       200:
 *         description: Successfully retrieved news articles.
 *       400:
 *         description: Missing count parameter or invalid parameter.
 *       500:
 *         description: Failed to fetch news articles.
 */
router.get("/news/:count", getNewsArticlesByCount);

/**
 * @swagger
 * /api/news/{category}:
 *   get:
 *     summary: Fetch news articles by category.
 *     description: Fetches news articles for a specified category.
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: The category of news articles to fetch.
 *         example: business, technology, science etc.
 *     responses:
 *       200:
 *         description: Successfully retrieved news articles.
 *       404:
 *         description: No articles found for this category.
 *       500:
 *         description: Failed to fetch news articles.
 */

router.get("news/:category", getNewsArticlesByCategory)


/**
 * @swagger
 * /api/news/search:
 *   get:
 *     summary: Search for news articles by keyword.
 *     description: Searches for news articles based on a keyword.
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: The keyword to search for in news articles.
 *         example: apple iphone
 * 
 *     responses:
 *       200:
 *         description: Successfully retrieved news articles matching the keyword.
 *       400:
 *         description: Missing keyword parameter or invalid parameter.
 *       500:
 *         description: Failed to search for news articles.
 */
router.get("news/search", searchNewsArticles)

module.exports = router;