import { Request, Response } from 'express';
import { storeDonationUseCaseFactory } from '../../domain/donations/useCases/StoreDonationUseCase';
import { DonationRepository } from '../../domain/donations/repositories/DonationRepository';

class StoreDonationController {
    constructor(
        private storeDonationUseCase = storeDonationUseCaseFactory(new DonationRepository())
    ) { }

    async exec(request: Request, response: Response) {
        const body = request.body;
        if (!body.name) {
            return response.status(400).json({ message: 'Name is required' });
        }

        try {
            const result = await this.storeDonationUseCase.handle(body.name);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}

function storeDonationControllerFactory() {
    return new StoreDonationController();
}

export {
    StoreDonationController,
    storeDonationControllerFactory
}