import { Connection, createConnection } from 'typeorm';

import config from './db.config';

const connection: Connection = createConnection(config).then(connect => {
	
	return connect;
}).catch(error => {
	console.log(error);
});

export default connection;
