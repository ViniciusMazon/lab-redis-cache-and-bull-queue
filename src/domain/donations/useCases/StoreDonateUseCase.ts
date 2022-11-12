import { DonateRepository } from '../repositories/DonateRepository';
import { DonationRepository } from '../repositories/DonationRepository';

class StoreDonateUseCase {
    constructor(
        private donationRepository: DonationRepository,
        private donateRepository: DonateRepository
    ) { }

    async handle(id: number, value: number) {
        const donation = await this.donationRepository.get(id);
        const { amount } = donation[0];
        return this.donateRepository.insert(id, amount + value);
    }
}

function storeDonateUseCaseFactory(
    donationRepository: DonationRepository,
    donateRepository: DonateRepository
) {
    return new StoreDonateUseCase(donationRepository, donateRepository);
}

export { StoreDonateUseCase, storeDonateUseCaseFactory }