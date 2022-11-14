import { default as IoRedis } from 'ioredis';

class Redis {
    private static instance: Redis
    public connection

    private constructor() {
        this.connection = new IoRedis(`${process.env.REDIS_URL}/1`);
    }

    public static getInstance() {
        if (this.instance === undefined) {
            Redis.instance = new Redis();
        }

        return Redis.instance;
    }
}

export { Redis }