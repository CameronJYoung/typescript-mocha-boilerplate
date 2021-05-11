import supertest from "supertest"
import { expect } from "chai";

const request = supertest('http://localhost:3000');

describe('Auth Router Tests', () => {

	describe('Register Route Tests', () => {
		it("register route exists", (done) => {
			request.post('/api/auth/register').end((err, res: supertest.Response) => {
				if (err) {
					console.log(err);
				}
	
				expect(res.statusCode).to.be.equal(200);
				done();
			})
		});
	})

	


});