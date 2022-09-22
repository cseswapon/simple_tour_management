const express = require("express");
const tourController = require("../../controllers/tour.controllers");
const Tour = require("../../modules/tour.module");
const router = express.Router();

router.route("/trending").get(tourController.topTourViewController);
router.route("/cheapest").get(tourController.cheapestController);

router
  .route("/")
  .get(tourController.allTourController)
  .post(tourController.tourPostController);

router
  .route("/:id")
  .get(tourController.tourSingleController)
  .patch(tourController.tourPatchController);

module.exports = router;
