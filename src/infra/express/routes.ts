import { Router, Request, Response } from 'express';

import {
    getDonationsControllerFactory,
    storeDonationControllerFactory,
    storeDonateControllerFactory,
    getTransactionsControllerFactory
} from '../../controller/donations';

const routes = Router();

routes.post('/api/v1/donations.donation', (request: Request, response: Response) => storeDonationControllerFactory().exec(request, response));
routes.post('/api/v1/donations.donate', (request: Request, response: Response) => storeDonateControllerFactory().exec(request, response))
routes.get('/api/v1/donations/:id', (request: Request, response: Response) => getDonationsControllerFactory().exec(request, response));

routes.get('/api/v1/donations.transactions/:donationId', (request: Request, response: Response) => getTransactionsControllerFactory().exec(request, response))

export { routes }