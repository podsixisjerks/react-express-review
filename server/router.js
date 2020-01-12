//Import controller
const controller = require('./controller');
//ExpressJS docs - 'Guide'->'Routing' express.Router section
const router = require('express').Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/:index')
  .delete(controller.delete);

module.exports = router;