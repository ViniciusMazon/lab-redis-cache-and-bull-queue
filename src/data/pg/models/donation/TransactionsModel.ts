import { Postgres } from "../../Postgres";

class TransactionsModel {
    constructor(
        private postgres = Postgres.getInstance()
    ) { };

    async insert(name: string, value: number, donationId: number) {
        return await this.postgres.connection`insert into transactions (name, value, donation_id) values (${name}, ${value}, ${donationId}) returning *`;
    }

    async getAllByDonationId(donationId: number) {
        return await this.postgres.connection`select * from transactions where donation_id = ${donationId}`;
    }
}

export { TransactionsModel }