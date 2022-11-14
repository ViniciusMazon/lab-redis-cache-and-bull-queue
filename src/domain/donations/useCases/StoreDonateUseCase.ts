import { DonateRepository } from '../repositories/DonateRepository';
import { DonationRepository } from '../repositories/DonationRepository';
import { TransactionRepository } from '../repositories/TransactionRepository';

class StoreDonateUseCase {
    constructor(
        private donationRepository: DonationRepository,
        private donateRepository: DonateRepository,
        private transactionRepository: TransactionRepository
    ) { }

    async handle(id: number, value: number, name: string) {
        const donation = await this.donationRepository.get(id);
        const { amount } = donation[0];
        this.transactionRepository.insert(name, value, id);
        return this.donateRepository.insert(id, amount + value);
    }
}

function storeDonateUseCaseFactory(
    donationRepository: DonationRepository,
    donateRepository: DonateRepository,
    transactionRepository: TransactionRepository
) {
    return new StoreDonateUseCase(
        donationRepository,
        donateRepository,
        transactionRepository
    );
}

export { StoreDonateUseCase, storeDonateUseCaseFactory }