const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces Google DNS to fix the querySrv ECONNREFUSED error

require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

// Connecting MongoDB (with explicit dbName to avoid saving to default 'test' database)
mongoose.connect(process.env.MONGO_URI, { dbName: "url-shortener" }) 
  .then((conn) => console.log(`Connected to MongoDB Successfully: Database is "${conn.connection.name}"`)) 
  .catch((err) => console.error("Database Connection error: ", err)); 

// Schema Definition 
const urlschema = new mongoose.Schema({ 
  shortUrl: { type: String, required: true, unique: true }, 
  longUrl: { type: String, required: true } 
}); 

const Url = mongoose.model('Url', urlschema); 

// Random string generator 
function generateshorturl() { 
  return Math.random().toString(36).slice(-8); 
} 

// POST ROUTE 
app.post('/shorten', async (req, res) => { 
  try { 
    const { longUrl } = req.body; 
    if (!longUrl) { 
      return res.status(400).json({ error: "Please provide long URL" }); 
    } 
    
    const shortUrl = generateshorturl(); 
    const newUrl = new Url({ shortUrl, longUrl }); 
    await newUrl.save(); 
    
    const baseUrl = `${req.protocol}://${req.get("host")}`; 
    res.status(201).json({ message: "URL Shortened Successfully", shortUrl: `${baseUrl}/${shortUrl}` }); 
  } catch (error) { 
    console.error(error); 
    res.status(500).json({ error: "Something went wrong...." }); 
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

app.get('/', (req, res) => { 
  res.send("URL Shortener API is running 🚀"); 
}); 

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => { 
  console.log(`server is running on port ${PORT}`); 
});
