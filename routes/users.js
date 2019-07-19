// register users route

const express = require('express');
const router = express.Router();

// @route     POST api/users
// @desc      Register a user  // description
// @access    Public           // no auth/tokens needed
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
