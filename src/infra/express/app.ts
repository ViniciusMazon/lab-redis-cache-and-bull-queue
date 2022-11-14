import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { DonationProcess } from '../bull/DonationProcess';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

DonationProcess.start();

export { app };