import { Router, Request, Response } from 'express';

import { 
    getDonationsControllerFactory,
    storeDonationControllerFactory
} from '../../controller/donations';

const routes = Router();

routes.post('/api/v1/donations.donation', (request: Request, response: Response) => storeDonationControllerFactory().exec(request, response));
routes.post('/api/v1/donations.donate')
routes.get('/api/v1/donations/:id', (request: Request, response: Response) => getDonationsControllerFactory().exec(request, response));

export { routes }