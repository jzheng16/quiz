const request = require('supertest');
const app = require('../../server/index.js');

describe('express', () => {
  test('express', () => {
    const server = request(app);
    server.get('/api/question')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});
