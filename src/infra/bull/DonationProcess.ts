import { Bull } from '../../data/redis/Bull';
import { DonateRepository } from '../../domain/donations/repositories/DonateRepository';
import { DonationRepository } from '../../domain/donations/repositories/DonationRepository';
import { storeDonateUseCaseFactory } from '../../domain/donations/useCases/StoreDonateUseCase';

class DonationProcess {
    static async start() {
        const queue = Bull.getInstance();

        queue.donation.process((job) => {
            const storeDonateUseCase = storeDonateUseCaseFactory(
                new DonationRepository(),
                new DonateRepository()
            );

            return storeDonateUseCase.handle(job.data.id, job.data.value);
        })
    }
}

export { DonationProcess }