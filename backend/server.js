const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/news', async (req, res) => {
    const category = req.query.category || 'general';
    const page = req.query.page || 1;

    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=6&page=${page}`,
            {
                headers: {
                    'X-Api-Key': process.env.NEWS_API_KEY,
                },
            }
        );
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.get('/', (req, res) => {
    res.send("this is the server")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
