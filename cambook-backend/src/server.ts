import express, { Application, Request, Response } from 'express';

//import routes
import authRoutes from './routes/auth.routes';

//init server
const app: Application = express();

app.get('/api', (req: Request, res: Response) => { //initial route
	res.send('Cambook API');
});

authRoutes(app);

app.listen(3000);
console.log(`app listening on port: ${3000}`);
