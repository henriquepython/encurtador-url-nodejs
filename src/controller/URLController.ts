import { config } from 'config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid';


export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //ver se URL já não existe
        //Criar o hash pra esse URL
        const { originUrl} = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash
        }`
        //Salvar a Url no banco
        //Retornar a URL que salvou
        response.json({ originUrl, hash, shortURL})
    }
}