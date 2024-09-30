import { Request, Response, Router } from 'express';

const router = Router();

router.get('/user', (req: Request, res: Response) => {
    res.json({
        name: 'John Doe',
        number: 123456789,
        work: 'Software Engineer',
        position: 'Senior Developer',
        address: '123 Main St',
        website: 'https://johndoe.com',
        birthday: '1990-01-01',
        relationship: 'single',
        note: 'Some additional note about the user',
    });
});

export default router;
