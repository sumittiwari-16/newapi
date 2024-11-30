const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'this is ur contact list' });
});

router.route(
  '/'.post((req, res) => {
    res.status(200).json({ message: `create ur contacts` });
  })
);

router.route(
  '/:id'.put((req, res) => {
    res
      .status(200)
      .json({ message: `update ur contacts for ${req.params.id}` });
  })
);

router.route(
  '/:id'.delete((req, res) => {
    res
      .status(200)
      .json({ message: `delete ur contacts for ${req.params.id}` });
  })
);

module.exports = router;
