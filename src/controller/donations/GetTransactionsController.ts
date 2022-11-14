import { Request, Response } from 'express';
import { getTransactionsUseCaseFactory } from '../../domain/donations/useCases';
import { TransactionRepository } from '../../domain/donations/repositories/TransactionRepository';
import { DonationRepository } from '../../domain/donations/repositories/DonationRepository';
import { GetTransactionsCache } from '../../infra/cache/GetTransactionsCache';

class GetTransactionsController {
    constructor(
        private getTransactionsCache = new GetTransactionsCache(
            getTransactionsUseCaseFactory(
                new TransactionRepository(),
                new DonationRepository()
            )
        )
    ) { };

    async exec(request: Request, response: Response) {
        const params = request.params;
        const query = request.query;

        if (!params.donationId) {
            return response.status(400).json({ message: 'Donation id is required' });
        }

        try {
            const transactions = await this.getTransactionsCache.handle(Number(params.donationId), Number(query.limit), Number(query.offset));
            return response.json(transactions);
        } catch (error) {
            return response.status(500).json({ message: 'Internal server error' });
        }
    }
}

function getTransactionsControllerFactory() {
    return new GetTransactionsController();
}

export { GetTransactionsController, getTransactionsControllerFactory }