const { clearHash } = require('../services/cache');
//receives clean cache from cache and make the function async. Delete the next in the arguments of /api/blogs
module.exports = async (req, res, next) => {

  await next();

  clearHash(req.user.id);
};