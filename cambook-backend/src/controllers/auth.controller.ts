import { Request, Response } from 'express';


const auth = {
	register(req: Request, res: Response)  {
		res.send('Cambook API')
	}
}

export default auth;