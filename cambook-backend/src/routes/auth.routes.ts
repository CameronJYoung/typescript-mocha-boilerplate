import express, { Router, Application } from 'express';
import auth from '../controllers/auth.controller';

const router: Router = express.Router();

export default (app: Application): Application => {
	router.post('/register', auth.register);

	app.use('/api/auth', router);
	return app;
};
