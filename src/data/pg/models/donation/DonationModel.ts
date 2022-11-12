import { Postgres } from "../../Postgres";

class DonationModel {
    constructor(
        private postgres = Postgres.getInstance()
    ) { };

    async get(id: number) {
        return await this.postgres.connection`select * from donations where id = ${id}`;
    }

    async insert(name: string) {
        return await this.postgres.connection`insert into donations (name, amount) values (${name}, 0) returning *`;
    }
}

export { DonationModel }