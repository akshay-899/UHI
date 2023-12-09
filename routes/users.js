const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/uhi');

const patientSchema = new mongoose.Schema({
  patientName: {
    type: String
  },
  address: {
    type: String
  },
  hospitalsVisited: {
    type: String
  }
});
const bookingSchema = new mongoose.Schema({
  hospital: {
    type: String
  },
  appointmentDate:{
    type: Date
  },
  appointmentTime: {
    type:String
  }
});
const blood_donationSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  bloodGroup:{
    type: String
  },
  contactNumber: {
    type:String
  },
  email: {
    type:String
  }

});


module.exports = mongoose.model('patient', patientSchema);
module.exports = mongoose.model('booking', bookingSchema);
module.exports = mongoose.model('donation', blood_donationSchema);

