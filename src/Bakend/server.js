const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/jai';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });

// Define Room Details Schema
const roomDetailsSchema = new mongoose.Schema({
  id: String,
  Name: String,
  Type: String,
  State: String,
  City: String,
  RoomType: String,
  Occupancy: String,
  Gender: String,
  Address: String,
  Landmark: String,
  Rating: String,
  TotalRating: String,
  Review: String,
  TotalPrice: String,
  TotalDiscount: String,
  ActualPrice: String,
  Availability: String,
  AvailableFrom: String,
  MinimumStay: String,
  Description: String,
  OwnerContacts: String,
  OwnerName: String,
  Facilities: Object,
  Policies: Object,
  OtherFacilities: Object,
  NearbyAmenities: Object,
  Images: Object,
  VirtualTour: String,
  BookingOptions: Object,
  SpecialOffers: Object,
  Reviews: Array,
}, { collection: 'roomDetails' });  // Ensure the collection name is correct

// Create Room Details Model
const RoomDetails = mongoose.model('RoomDetails', roomDetailsSchema);

// Initialize the app
const app = express();

// Use the CORS middleware
app.use(cors());  // Enable CORS for all routes

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to fetch all room details
app.get('/jai/rooms', async (req, res) => {
  try {
    const rooms = await RoomDetails.find();
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
