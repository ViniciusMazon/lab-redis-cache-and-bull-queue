import { TransactionsModel } from '../../../data/pg/models/donation/TransactionsModel';

class TransactionRepository {
    constructor(
        private transactionsModel = new TransactionsModel()
    ) { };

    insert(name: string, value: number, donationId: number) {
        return this.transactionsModel.insert(name, value, donationId);
    }

    getAllByDonationId(donationId: number, limit: number, offset: number) {
        return this.transactionsModel.getAllByDonationId(donationId, limit, offset);
    }
}

export { TransactionRepository }