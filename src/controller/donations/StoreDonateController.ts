import { Request, Response } from 'express';
import { Bull } from '../../data/redis/Bull';

class StoreDonateController {
    constructor(
        private queue = Bull.getInstance(),
    ) { }

    async exec(request: Request, response: Response) {
        const body = request.body;

        if (!body.value) {
            return response.status(400).json({ message: 'Donate value is required (field value)' });
        }

        if (body.value < 0) {
            return response.status(400).json({ message: 'Donate value must be greater than zero' });
        }

        if (!body.id) {
            return response.status(400).json({ message: 'Donation id is required' });
        }

        if (!body.name) {
            return response.status(400).json({ message: 'Name is required' });
        }

        try {
            this.queue.donation.add({ id: body.id, value: body.value, name: body.name });
            return response.status(201).json({ message: 'The donation is being processed and will soon be available' });
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}

function storeDonateControllerFactory() {
    return new StoreDonateController();
}

export { StoreDonateController, storeDonateControllerFactory }