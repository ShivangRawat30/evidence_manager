const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://siddarthvedantu:siddarthsingh@cluster0.zow3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { // Change the URI to match your database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
