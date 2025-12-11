const request = require('supertest');
const app = require('../server');

describe('GET /health', () => {
  it('should return status ok', (done) => {
    request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200, { status: 'ok' }, done);
  });
});

