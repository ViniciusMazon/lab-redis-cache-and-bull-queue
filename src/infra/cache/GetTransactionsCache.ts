import { GetTransactionsUseCase } from '../../domain/donations/useCases/GetTransactionsUseCase';
import { Redis } from '../../data/redis/Redis';

class GetTransactionsCache {
    private redis: Redis

    constructor(
        private getTransactionsUseCase: GetTransactionsUseCase
    ) {
        this.redis = Redis.getInstance();
    };

    async handle(id: number, limit: number, offset: number) {
        const key = `transactions-donationId${id}-limit${limit}-offset${offset}`;
        const response = {
            meta: {
                limit,
                offset,
                cached: true
            },
            attributes: []
        }

        const cache = await this.redis.connection.get(key);
        if (cache) {
            response.attributes = JSON.parse(cache);
            return response;
        }

        const transactions = await this.getTransactionsUseCase.handle(id, limit, offset);

        this.redis.connection.set(key, JSON.stringify(transactions), 'EX', 10);

        response.meta.cached = false;
        response.attributes = transactions;

        return response;
    }
}

export { GetTransactionsCache }