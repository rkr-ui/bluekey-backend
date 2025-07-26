// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const Subscription = require('./models/Subscription');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// Paddle webhook endpoint
app.post('/paddle/webhook', async (req, res) => {
  console.log("📩 Webhook received:", req.body);

  const { email, product_id, status } = req.body;

  try {
    const record = new Subscription({
      email,
      product_id,
      status,
      raw: req.body
    });

    await record.save();
    res.status(200).send('OK');
  } catch (err) {
    console.error("❌ Error saving subscription:", err);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
