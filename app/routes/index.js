const apiRoutes = require('./api_routes');

module.exports = (app, db) => {
  apiRoutes(app, db);
  // More routes go here
}