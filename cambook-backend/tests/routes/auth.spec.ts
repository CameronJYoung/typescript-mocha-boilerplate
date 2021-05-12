import supertest from 'supertest'
import { expect } from 'chai';

const request = supertest('http://localhost:3000');

describe('Auth Router Tests', () => {

	describe('Register Route Tests', () => {
		it('register route exists', (done) => {
			request.post('/api/auth/register')
				.end((err, res: supertest.Response) => {
					if (err) {
						console.log(err);
					}
		
					expect(res.statusCode).to.be.equal(200);
					done();
				});
		});

		it('register route accepts json data', (done) => {
			request.post('/api/auth/register')
				.send({
					'username': 'cameron',
					'password': 'password',
					'confirmPassword': 'password'
				})
				.set('Content-Type', 'application/json')
				.set('Accept', 'application/json')
				.expect(200)
				.end((err, res: supertest.Response) => {
					if (err) {
						console.log(err);
					}
		
					expect(res.statusCode).to.be.equal(200);
					done();
				});
		});
	});
});