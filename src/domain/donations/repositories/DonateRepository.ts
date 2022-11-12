import {DonationModel} from '../../../data/pg/models/donation/DonationModel';

class DonateRepository {
    constructor(
        private donationModel = new DonationModel()
    ){}

    insert(id: number, amount: number) {
        return this.donationModel.update(id, amount);
    }

}

export { DonateRepository }