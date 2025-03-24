const request = require('supertest'); // For API testing
const app = require('../app'); // Import your server app

describe('User Authentication', () => {
  it('should return 200 for successful login', async () => {
    const response = await request(app).post('/login').send({
      username: 'testUser',
      password: 'password123'
    });
    expect(response.statusCode).toBe(200);
  });

  it('should return 401 for invalid credentials', async () => {
    const response = await request(app).post('/login').send({
      username: 'wrongUser',
      password: 'wrongPassword'
    });
    expect(response.statusCode).toBe(401);
  });
});