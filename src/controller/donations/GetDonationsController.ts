import { Request, Response } from 'express';
import { DonationRepository } from '../../domain/donations/repositories/DonationRepository';
import { getDonationsUseCaseFactory } from '../../domain/donations/useCases/GetDonationsUseCase';

class GetDonationsController {
    constructor(
        private getDonationsUseCase = getDonationsUseCaseFactory(new DonationRepository())
    ) { };

    async exec(request: Request, response: Response) {
        if (!request.params.id) {
            return response.status(400).json({ message: 'Donation id is required' });
        }

        try {
            const donations = await this.getDonationsUseCase.handle(Number(request.params.id));
            response.json(donations);
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}

function getDonationsControllerFactory() {
    return new GetDonationsController();
}

export { getDonationsControllerFactory, GetDonationsController }