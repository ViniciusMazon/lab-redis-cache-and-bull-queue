import postgres from "postgres";

class Postgres {
    private static instance: Postgres;
    public connection;

    private constructor() {
        this.connection = postgres(String(process.env.POSTGRES_URL));
    };

    public static getInstance() {
        if (this.instance === undefined) {
            Postgres.instance = new Postgres();
        }

        return Postgres.instance;
    }
}

export { Postgres }