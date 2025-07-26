// models/Subscription.js
const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  email: String,
  product_id: String,
  status: String,
  raw: Object
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
