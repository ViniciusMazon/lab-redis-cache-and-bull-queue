import { DonationModel } from "../../../data/pg/models/donation/DonationModel";

class DonationRepository {
    constructor(
        private donationModel = new DonationModel()
    ) { };

    get(id: number) {
        return this.donationModel.get(id);
    }

    insert(name: string){
        return this.donationModel.insert(name);
    }
}

export { DonationRepository }