import { Router, Request, Response } from 'express';

import { getDonationsControllerFactory } from '../../controller/donations';

const routes = Router();

routes.post('/api/v1/donations.donation');
routes.post('/api/v1/donations.donate')
routes.get('/api/v1/donations/:id', (request: Request, response: Response) => getDonationsControllerFactory().exec(request, response));

export { routes };