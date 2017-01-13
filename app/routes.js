var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/personal-data', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var source = req.query.source

  if (source === 'none') {
    // redirect to the relevant page
    res.redirect('/no-consent')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('personal-data')
  }
})

router.get('/get-consent', function(req, res){
  // Redirect the flow to the data exchange to get consent
  res.redirect('https://dx-poc.herokuapp.com/consent/blue_badge?bearer=1234')
  // res.redirect('http://127.0.0.1:4000/consent/blue_badge?bearer=1234')
})

router.get('/consent-given', function(req, res){
  // The data exchange has told us that the user has given consent (and proven it)
  // and has given us some tokens in the URL it has just called (/consent-given)
  // that we can use to make an API call.

  // Right now, let's render a wait page
  res.render('consent-given')
})

//personal data correct
router.get('/disability-type', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var detailscorrect = req.query.detailscorrect

  if (detailscorrect === 'no') {
    // redirect to the relevant page
    res.redirect('/no-match')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('disability-type')
  }
})


module.exports = router
