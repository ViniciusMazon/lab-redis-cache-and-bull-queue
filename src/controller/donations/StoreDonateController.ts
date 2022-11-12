import { Request, Response } from 'express';
import { storeDonateUseCaseFactory } from '../../domain/donations/useCases/StoreDonateUseCase';
import { DonateRepository } from '../../domain/donations/repositories/DonateRepository';
import { DonationRepository } from '../../domain/donations/repositories/DonationRepository'

class StoreDonateController {
    constructor(
        private storeDonateUseCase = storeDonateUseCaseFactory(
            new DonationRepository(),
            new DonateRepository()
        )
    ) { }

    async exec(request: Request, response: Response) {
        const body = request.body;

        if (!body.value) {
            return response.status(400).json({ message: 'Donate value is required (field value)' });
        }

        if (body.value < 0) {
            return response.status(400).json({ message: 'Donate value must be greater than zero' });
        }

        if (!body.id) {
            return response.status(400).json({ message: 'Donation id is required' });
        }

        try {
            const result = await this.storeDonateUseCase.handle(body.id, body.value);
            return response.status(201).json(result);
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}

function storeDonateControllerFactory() {
    return new StoreDonateController();
}

export { StoreDonateController, storeDonateControllerFactory }