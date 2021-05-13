import { expect, should } from 'chai';

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
		const testConnection = connection(config);
		expect(testConnection.isConnected).to.be.true;
		
		done();
	});


});
