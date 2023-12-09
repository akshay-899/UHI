var express = require('express');
var router = express.Router();
const patientModel = require('./users');
const bookingModel=require('./users')
const blood_donationModel=require('./users')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
  res.render('main_page');
});
router.get('/patient', function(req, res, next) {
  res.render('user');
});
router.get('/book', function(req, res, next) {
  res.render('book');
});
router.get('/done', function(req, res, next) {
  res.render('thankyou');
});
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
// router.post('/done', function(req, res, next) {
//   res.render('thankyou');
// });
router.get('/adminpannel', function(req, res, next) {
  res.render('admin-pannel');
});
router.get('/blood_donation', (req, res) => {
  res.render('blood'); // Assuming you have an admin-panel.ejs file in your views folder
});

router.post('/add-patient', function(req, res) {
  console.log('Received POST request to add a patient');
  
  const newPatient = new patientModel({
    patientName: req.body.patientName,
    address: req.body.address,
    hospitalsVisited: req.body.hospitalsVisited
  });

  newPatient.save()
    .then(savedPatient => {
      console.log('Patient saved:', savedPatient);
      res.redirect('/main');
    })
    .catch(err => {
      console.error('Error saving patient:', err);
      res.render('error', { message: 'Failed to save patient' });
    });
});
router.post('/done', function(req, res) {
  console.log('Received POST request to add a patient');
  const newbooking = new bookingModel({
    hospital: req.body.hospital,
    appointmentDate: req.body.appointmentDate,
    appointmentTime: req.body.appointmentTime
  });

  newbooking.save()
    .then(savedbooking => {
      console.log('Appointment booked', savedbooking);
      res.redirect('/done');
    })
    .catch(err => {
      console.error('Error saving patient:', err);
      res.render('error', { message: 'Failed to appoint' });
    });
});
router.post('/blood', function(req, res) {
  console.log('Received POST request to add a patient');
  const donar = new blood_donationModel({
    Name: req.body.Name,
    bloodGroup:req.body.bloodGroup,
    contactNumber:req.body.contactNumber,
    email:req.body.email});

  donar.save()
    .then(saveddonar => {
      console.log('Donation done', saveddonar);
      res.redirect('/done');
    })
    .catch(err => {
      console.error('Error saving patient:', err);
      res.render('error', { message: 'Failed to appoint' });
    });
});


router.get('/logout', function(req, res, next) {
  // Implement logout functionality here, such as clearing the session or user authentication status

  // For example, if you're using session-based authentication with Express
  req.session.destroy(function(err) {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      // Redirect to the home page or any other page after logout
      res.redirect('/');
    }
  });
});



module.exports = router;
