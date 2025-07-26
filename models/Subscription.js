const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: String,
  product_id: String,
  status: String,
  raw: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
