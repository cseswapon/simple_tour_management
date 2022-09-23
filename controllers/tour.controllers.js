const serviceTour = require("../services/tour.services");

exports.allTourController = async (req, res, next) => {
  try {
    const queries = {};
    if (req.query.fields) {
     const fields = req.query.fields.split(",").join(" ");
     queries.fields = fields;
    }
    if (req.query.sort) {
     const sortBy = req.query.sort.split(",").join(" ");
     queries.sortBy = sortBy;
    }
    if (req.query.page) {
      const { page = 1, limit = 2 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = limit;
    }
  const result = await serviceTour.allTours(queries);
  res.status(200).send({ message: "all tour", data: result });
  } catch (err) {
    res.status(400).send({ message: "fail", error: err.message });
  }
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