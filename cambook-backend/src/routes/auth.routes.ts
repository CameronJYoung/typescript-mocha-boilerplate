import express, { Router, Request, Response, Application } from 'express';

const router: Router = express.Router()

export default (app: Application) => {
	router.post('/register', (req: Request, res: Response) => {
		res.send('Cambook API')
	})

	app.use('/api/auth', router);
}
