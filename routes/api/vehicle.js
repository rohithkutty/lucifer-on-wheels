const express = require('express');
const router = express.Router();

// @route  GET /api/vehicle/test
// @desc   Tests post route
// @access Public

router.get('/test', (req, res)=> res.json(
  {msg: "vehicle works"}
));

module.exports = router;
