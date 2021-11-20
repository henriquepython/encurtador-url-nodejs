import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid';


export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //ver se URL já não existe
        //Criar o hash pra esse URL
        const { originURL} = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash
        }`
        //Salvar a Url no banco
        //Retornar a URL que salvou
        response.json({ originURL, hash, shortURL})
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        //Pegar hash da url
        const { hash } = req.params
        //Encontrar a URL  original pelo hash
        const url = {   
            originURL: 'mongodb+srv://root:<password>@cluster0.2mt7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            hash: 'jdF5ppaTF',
            shortURL: 'localhost:5000/jdF5ppaTF',
         }

        //Redirecionar para a URL original a partir do encontrado no DB
         response.redirect(url.originURL)
    }
}