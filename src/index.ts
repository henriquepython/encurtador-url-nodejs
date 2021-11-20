import express, { Request, Response } from 'express';
import { URLController } from './controller/URLController'

const api = express();

const urlController = new URLController()
api.post('/shorten', urlController.shorten)

api.listen(5000, () => {
    console.log('Express listening')
});

