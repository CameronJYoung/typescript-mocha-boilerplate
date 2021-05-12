import { Request, Response } from 'express';

const auth = {
	register(req: Request, res: Response): void  {
		res.send('Cambook API');
	}
};

export default auth;