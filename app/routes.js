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
