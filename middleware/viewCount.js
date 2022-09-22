let i = 0;
function viewCount(req, res, next) {
  i++;
  req.view = i;
  next();
}
module.exports = viewCount;
