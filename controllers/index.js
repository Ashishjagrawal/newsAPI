const axios = require('axios');
const NodeCache = require('node-cache');
const API_KEY = process.env.GNEWS_API_KEY
const newsCache = new NodeCache({ stdTTL: 3600 }); // Cache news for 1 hour

exports.getNewsArticlesByCount = async (req, res) => {
    const count = req.params.count
    if (!count) {
        return res.status(400).json({ error: 'Missing count parameter' });
    }

    //Get news articles from cache if present
    const cachedNews = newsCache.get(`news_${count}`);
    
    if (cachedNews) {
        return res.json(cachedNews);
    }

    try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&max=${count}`);
        const articles = response.data.articles;
        // Add response to cache
        newsCache.set(`news_${count}`, articles);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
}

exports.getNewsArticlesByCategory = async (req, res) => {
    const title = req.params.category;

    try {
        // Get news articles by category
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`);
        const article = response.data.articles.find((a) => a.title === title);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ error: 'No article found for this category' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
}

exports.searchNewsArticles = async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Missing keyword parameter' });
    }

    try {
        // search news articles by keyword
        const response = await axios.get(`https://gnews.io/api/v4/search?q=${keyword}&token=${API_KEY}`);
        const articles = response.data.articles;
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search for news articles' });
    }
}