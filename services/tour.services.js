const Tour = require("../modules/tour.module");

exports.allTours = async (queries) => {
  // console.log(queries.fields);
  const totalTour = await Tour.countDocuments(queries);
  const tour = await Tour.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  const pageCount = Math.ceil(totalTour / queries.limit);
  return { totalTour, pageCount,tour };
};

exports.singleView = async (id) => {
  return await Tour.findOne({ _id: id });
};

exports.tourCreate = async (data) => {
  data.view = 0;
  return await Tour.create(data);
};

exports.tourPatch = async (id, body) => {
  return await Tour.updateOne(
    { _id: id },
    { $set: body },
    { runValidators: true }
  );
};

exports.tourView = async () => {
  return await Tour.find({})
    .select({ view: 1, _id: 0, name: 1 })
    .sort({ view: -1, name: -1 })
    .limit(3);
};

exports.cheapest = async () => {
  return Tour.find({})
    .select({ _id: 0, name: 1, price: 1, description: 1 })
    .sort({ price: 1, name: -1 })
    .limit(3);
};
