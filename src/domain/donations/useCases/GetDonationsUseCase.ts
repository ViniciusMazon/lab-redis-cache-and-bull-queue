import { DonationRepository } from "../repositories/DonationRepository";

class GetDonationsUseCase {
    constructor(
        private donationRepository: DonationRepository
    ) { }

    handle(donationId: number) {
        return this.donationRepository.get(donationId);
    }
}

function getDonationsUseCaseFactory(donationRepository: DonationRepository) {
    return new GetDonationsUseCase(
        donationRepository
    );
}

export { GetDonationsUseCase, getDonationsUseCaseFactory }