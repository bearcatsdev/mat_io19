const API_PREFIX = "/api/v1";
const api = require('./api');

module.exports = (app, apiUrl) => {
  app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/schedule', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/reservation', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
  });

  //app.route(API_PREFIX + '/reservation').post(api.newReservation);

  app.route(apiUrl + '/email').get(api.email);

  // page not found
  app.get('*', function(req, res){
      res.status(404).sendFile(__dirname + '/public/not-found.html');
  });
};