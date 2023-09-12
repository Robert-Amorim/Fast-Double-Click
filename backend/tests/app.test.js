const request = require('supertest');
const chai = require('chai');
const app = require('../api/app');

const expect = chai.expect;

describe('Testing back-end request', () => {
  it('You must POST the JSON file', async () => {
    const response = await request(app)
      .post('/')
      .send({ time: '13:31:36' });
    expect(response.statusCode).to.equal(201);
  });

  it('You must perform the GET method on the list of records', async () => {
    const response = await request(app).get('/records');
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('You must perform the DELETE method on the JSON file records', async () => {
    const response = await request(app).delete('/records');
    expect(response.statusCode).to.equal(204);
  });
});
