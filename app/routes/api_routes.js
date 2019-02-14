module.exports = (app, db) => {
  app.get('/coins/invested', (req, res) => {
    // TODO: Connect to database
    res.send('this route -- /coins/invested -- works.')
  });
  app.get('/coins/total', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investments', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investments/active', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investments/amount', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investments/total', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investors/top', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/investors/last24', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/summary', (req, res) => {
    // TODO: Connect to database
  });
  app.get('/calculate', (req, res) => {
    // TODO: Connect to database
  });
};