const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoURI = 'mongodb://localhost:27017/jai';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
    console.log('Connected to database:', mongoose.connection.name);
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

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
}, { collection: 'roomDetails' });

const RoomDetails = mongoose.model('RoomDetails', roomDetailsSchema);

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/jai/rooms', async (req, res) => {
  console.log('Route /jai/rooms');
  try {
    console.log("Fetching rooms...");
    const rooms = await RoomDetails.find();
    console.log("Rooms fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).json({ error: err.message });
  }
});
// pg's
app.get('/jai/rooms/roomtype/pg', async (req, res) => {
  console.log('Route /jai/rooms/roomtype/pg hit');
  try {
    console.log("Fetching PG rooms...");
    const rooms = await RoomDetails.find({Type:"PG"});
    console.log("PG Rooms fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching PG rooms:', err);
    res.status(500).json({ error: err.message });
  }
});
// hostels
app.get('/jai/rooms/roomtype/hostels', async (req, res) => {
  // console.log('Route /jai/rooms/roomtype/Hostels hit');
  try {
    console.log("Fetching PG rooms...");
    const rooms = await RoomDetails.find({Type:"Hostels"});
    console.log("Hostels Rooms fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching Hostels rooms:', err);
    res.status(500).json({ error: err.message });
  }
});
// Rooms
app.get('/jai/rooms/roomtype/rooms', async (req, res) => {
  // console.log('Route /jai/rooms/roomtype/rooms hit');
  try {
    console.log("Fetching Rooms rooms...");
    const rooms = await RoomDetails.find({Type:"Rooms"});
    console.log("Rooms Rooms fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching Rooms rooms:', err);
    res.status(500).json({ error: err.message });
  }
});
// homeImage
app.get('/jai/dashboard/homeimages', async (req, res) => {
  // console.log('Route /jai/rooms/roomtype/rooms hit');
  try {
    console.log("Fetching homeimages ...");
    const rooms = await RoomDetails.find({id:"homepageImage"});
    console.log("homepageImage fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching homepageImage:', err);
    res.status(500).json({ error: err.message });
  }
});
// aboutPageImage
app.get('/jai/about/aboutimages', async (req, res) => {
  // console.log('Route /jai/rooms/roomtype/rooms hit');
  try {
    console.log("Fetching homeimages ...");
    const rooms = await RoomDetails.find({id:"AboutpageImage"});
    console.log("AboutpageImage fetched:", rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error('Error fetching AboutpageImage:', err);
    res.status(500).json({ error: err.message });
  }
});

// Catch-all route for undefined routes
app.use((req, res) => {
  console.log('404 - Route not found:', req.url);
  res.status(404).send('Route not found');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server started at ${new Date().toISOString()}`);
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});