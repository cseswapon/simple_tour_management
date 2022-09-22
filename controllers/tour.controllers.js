const serviceTour = require("../services/tour.services");

exports.allTourController = async (req, res, next) => {
  const result = await serviceTour.allTours();
  res.status(200).send({ message: "all tour", data: result });
};

exports.tourSingleController = async (req, res, next) => {
  try {
    // console.log(req.view);
    const { id } = req.params;
    const result = await serviceTour.singleView(id);
    result.view += 1;
    await result.save();
    res.status(200).send({ status: true, message: result });
  } catch (error) {
    res.status(400).send({ message: "fail", error: error.message });
  }
};

exports.tourPostController = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await serviceTour.tourCreate(body);
    res.status(200).send({
      status: "Success",
      message: "Data Save Successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).send({ message: "Data Send Fail", error: err.message });
  }
};

exports.tourPatchController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateTour = await serviceTour.tourPatch(id, req.body);
    res.status(200).send({
      status: true,
      message: "Update Tour Successfully",
      result: updateTour,
    });
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

exports.topTourViewController = async (req, res, next) => {
  try {
    const result = await serviceTour.tourView();
    res.status(200).send({ message: "success", data: result });
  } catch (err) {
    res.status(400).send({ message: "Data Send Fail", error: err.message });
  }
};

exports.cheapestController = async (req, res, next) => {
  try {
    const result = await serviceTour.cheapest();
    res.status(200).send({ message: "success", data: result });
  } catch (err) {
    res.status(400).send({ message: "Data Send Fail", error: err.message });
  }
};