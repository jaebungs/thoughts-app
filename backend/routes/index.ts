import { Router } from 'express';
import thoughtsRouter from './api/v1/thoughts';

const router = Router();

router.use('/thoughts', thoughtsRouter);

export default router;