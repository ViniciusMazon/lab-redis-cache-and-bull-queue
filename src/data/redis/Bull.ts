import Queue from 'bull';

class Bull {
    private static instance: Bull;
    public donation: Queue.Queue;

    private constructor() {
        this.donation = new Queue('donations', String(process.env.REDIS_URL));
    }

    public static getInstance() {
        if (this.instance === undefined) {
            Bull.instance = new Bull();
        }

        return Bull.instance;
    }
}

export { Bull }