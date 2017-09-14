const app = require('../app');
const request = require('supertest');
const chai = require('chai').expect;

describe('App', function() {
     describe('/todos', function() {
          it('GET /todos', function(done) {
               request(app)
               .get('/todos')
               .set('Accept', 'application/json')
               .expect('Content-Type', /json/)
               .expect(200)
               .then((response) => {
                    expect(response.body).to.be.a('array');
                    done();
               });
          })
     })
})
