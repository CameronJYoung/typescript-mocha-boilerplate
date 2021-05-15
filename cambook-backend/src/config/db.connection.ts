import { Connection, createConnection } from 'typeorm';

import config from './db.config';

const connection = new Promise((resolve, reject) => {
	createConnection(config).then(connection => {
		resolve(connection);
	}).catch(err => {
		reject(err);
	});
});

export default connection;
