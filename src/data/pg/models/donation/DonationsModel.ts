import { Postgres } from "../../Postgres";

class DonationsModel {
    constructor(
        private postgres = Postgres.getInstance()
    ) { };

    async get(id: number) {
        return await this.postgres.connection`select * from donations where id = ${id}`;
    }

    async insert(name: string) {
        return await this.postgres.connection`insert into donations (name, amount) values (${name}, 0) returning *`;
    }

    async update(id: number, amount: number) {
        return await this.postgres.connection`update donations set amount = ${amount} where id = ${id} returning *`;
    }
}

export { DonationsModel }