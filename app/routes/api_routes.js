module.exports = (app, db) => {
  app.get('/coins/invested', (req, res) => {
    // Returns all invested memecoins in the market
    // TODO: Connect to database
  });
  app.get('/coins/total', (req, res) => {
    // Returns all active memecoins in the market
    // TODO: Connect to database
  });
  app.get('/investments', (req, res) => {
    // Returns all investments
    // TODO: Connect to database
  });
  app.get('/investments/active', (req, res) => {
    // Returns all active investments
    // TODO: Connect to database
  });
  app.get('/investments/amount', (req, res) => {
    // Returns investments coins
    // TODO: Connect to database
  });
  app.get('/investments/total', (req, res) => {
    // Returns number of investments
    // TODO: Connect to database
  });
  app.get('/investors/top', (req, res) => {
    // Returns all investments of a specific submission
    // Takes a submission.id from PRAW
    // TODO: Connect to database
  });
  app.get('/investors/last24', (req, res) => {
    // Returns a list of tap investors (all-time)
    // TODO: Connect to database
  });
  app.get('/summary', (req, res) => {
    // Summary
    // TODO: Connect to database
  });
};