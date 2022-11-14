import { TransactionRepository } from '../repositories/TransactionRepository';
import { DonationRepository } from '../repositories/DonationRepository';

class GetTransactionsUseCase {
    constructor(
        private transactionsRepository: TransactionRepository,
        private donationRepository: DonationRepository
    ) { };

    async handle(donationId: number, limit: number = 10, offset: number = 0) {
        const donation = await this.donationRepository.get(donationId);
        if (!donation) throw new Error('Donation does not exists');

        return await this.transactionsRepository.getAllByDonationId(donationId, limit, offset);
    }
}

function getTransactionsUseCaseFactory(
    transactionsRepository: TransactionRepository,
    donationRepository: DonationRepository
) {
    return new GetTransactionsUseCase(
        transactionsRepository,
        donationRepository
    )
}

export { GetTransactionsUseCase, getTransactionsUseCaseFactory }