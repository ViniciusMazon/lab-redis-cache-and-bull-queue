import { DonationRepository } from "../repositories/DonationRepository"

class StoreDonationUseCase {
    constructor(
        private donationRepository: DonationRepository
    ) { };

    handle(name: string) {
        return this.donationRepository.insert(name);
    }
}

function storeDonationUseCaseFactory(donationRepository: DonationRepository) {
    return new StoreDonationUseCase(donationRepository);
}

export { StoreDonationUseCase, storeDonationUseCaseFactory }

