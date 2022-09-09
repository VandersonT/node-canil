import { Request, Response } from 'express';
import { Pet } from '../models/Pet';

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        list,
        search: query,
        menu: {
            all: true,
            dogs: false,
            cats: false,
            fishes: false
        }
    });

}