const API_PREFIX = "/api/v1";
const api = require('./api');
const forms = require('./forms')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/schedule', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/reservation', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/page-not-found', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/about', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.route('/reservation').post(forms.reservationForm);

    app.route(API_PREFIX + '/reservation').post(api.newReservation);

    // page not found
    app.get('*', function (req, res) {
        res.status(404).redirect('/page-not-found');
    });
};