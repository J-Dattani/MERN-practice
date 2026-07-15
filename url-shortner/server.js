require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connecting MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch((err) => console.error("Database Connection error: ", err));

// Schema Definition
const urlschema = new mongoose.Schema({
    shortUrl: { type: String, required: true, unique: true }, 
    longUrl: { type: String, required: true } 
});

// FIX 2: Changed lowercase 'url' to uppercase 'Url' to match your routes
const Url = mongoose.model('Url', urlschema);

// Random number generator
function generateshorturl() {
    return Math.random().toString(36).slice(-8);
}

// POST ROUTE
app.post('/shorten', async (req, res) => {
    try {
        const { longUrl } = req.body;
        
        if (!longUrl) {
            return res.status(400).json({
                error: "Please provide long URL"
            });
        } // FIX 1: The closing bracket belongs HERE!

        const shortUrl = generateshorturl();

        // FIX 3: Changed 'newUrl(' to 'new Url(' to use your database model
        const newUrl = new Url({ shortUrl, longUrl });
        await newUrl.save();

        res.status(201).json({
            message: "URL Shortened Successfully....",
            shorturl: `http://localhost:${process.env.PORT || 3000}/${shortUrl}`
        });
        
    } catch (error) {
        console.error(error); // Helpful for debugging
        res.status(500).json({
            error: "Something went wrong...."
        });        
    }
});

// GET ROUTE
app.get('/:shortUrl', async (req, res) => {
    try {
        const { shortUrl } = req.params;

        const record = await Url.findOne({ shortUrl });

        if (record) {
            return res.redirect(record.longUrl);
        } else {
            return res.status(404).send("Short URL not found");
        }
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
