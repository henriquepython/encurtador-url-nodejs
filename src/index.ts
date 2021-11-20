import express, { Request, Response } from 'express';
import

const api = express();

const urlController = new URLController()

api.get('/test', (req: Request, res: Response) => {
    res.json({ success: true})
})

api.listen(5000, () => {
    console.log('Express listening')
});

