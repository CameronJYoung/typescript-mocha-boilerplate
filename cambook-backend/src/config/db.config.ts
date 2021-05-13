import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'password',
	database: 'cambook_backend_db'
};

export default config;