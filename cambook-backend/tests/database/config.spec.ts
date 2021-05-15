import { expect, should } from 'chai';
import { Connection } from 'typeorm';

import config from '../../src/config/db.config';
import connection from '../../src/config/db.connection';

describe('db config checks', () => {
	it('config has correct typeORM keys', (done) => { // potentially not needed as typescript won't compile if it has the incorrect keys (does specify the postgres keys tho)
		expect(config).to.have.all.keys([
			'type',
			'host',
			'port',
			'username',
			'password',
			'database'
		]);
		
		done();
	});

	it('testing api connection to db', (done) => {
		connection.then((conn) => {
			expect(conn.isConnected).to.be.true;
		}).catch((err) => {
			console.log(err);
		});
		

		done();
	});


});
