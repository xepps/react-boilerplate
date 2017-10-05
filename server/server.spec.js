const request = require('supertest-as-promised');

const app = require('./app');

describe('The Server', () => {
    test('responds to / with the index.html', () =>
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(res => expect(res.text).toContain('<div id="root"></div>')));

    test('responds to favicon.icon request', () =>
        request(app)
            .get('/favicon.ico')
            .expect('Content-Type', 'image/x-icon')
            .expect(200));

    test('responds to any route with the index.html', () =>
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(res => expect(res.text).toContain('<div id="root"></div>')));
});
