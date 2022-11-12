import { Postgres } from "../../Postgres";

class DonationModel {
    constructor(
        private postgres = Postgres.getInstance()
    ) { };

    async get(id: number) {
        return await this.postgres.connection`select * from donations where id = ${id}`;
    }
}

export { DonationModel }