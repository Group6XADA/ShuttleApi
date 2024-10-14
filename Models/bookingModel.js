const mongoose = require('mongoose');

const bookingModel = new mongoose.Schema({
    hotelName: String,
    contact: String,
    numGuests: Number,
    pickupLocation: String,
    dropOffLocation: String
  });

  module.exports = mongoose.model('Booking', bookingModel);