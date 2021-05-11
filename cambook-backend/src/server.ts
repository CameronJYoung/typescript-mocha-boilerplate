import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/api', (req: Request, res: Response) => {
	res.send('Cambook API')
})
   
app.listen(3000)
console.log(`app listening on port: ${3000}`);
