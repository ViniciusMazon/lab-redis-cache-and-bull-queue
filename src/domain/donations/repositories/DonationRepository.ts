import { DonationsModel } from "../../../data/pg/models/donation/DonationsModel";

class DonationRepository {
    constructor(
        private donationsModel = new DonationsModel()
    ) { };

    get(id: number) {
        return this.donationsModel.get(id);
    }

    insert(name: string){
        return this.donationsModel.insert(name);
    }
}

export { DonationRepository }