import {DonationsModel} from '../../../data/pg/models/donation/DonationsModel';

class DonateRepository {
    constructor(
        private donationsModel = new DonationsModel()
    ){}

    insert(id: number, amount: number) {
        return this.donationsModel.update(id, amount);
    }

}

export { DonateRepository }