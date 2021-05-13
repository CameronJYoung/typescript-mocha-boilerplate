import { createConnection } from 'typeorm';

import config from './db.config';

const connection = createConnection(config).then(connect => {
	console.log(2);
	console.log(connect);
	
	return connect;
}).catch(error => {
	return error;
});

export default connection;
