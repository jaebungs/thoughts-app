import { Request, Response } from 'express';
import getErrorMessage from '../utils/errorHandle';
import db from '../db/index';

export class ThoughtsController {
    // GET /api/vi/thoughts
    public async getAllThoughts(req: Request, res: Response) {
        try {
            const results = await db.query('select * from thought')
            console.log(results)
            const data = 'test'
            res.status(200).json({ data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // GET /api/vi/thoughts/:id
    public async  getThougtById(req: Request, res: Response) {
        try {
            const { id } = req.params

            const status = "succes"
            const data = { id }
            res.status(200).json({ status, data })

        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // POST /api/vi/thoughts
    public async postThought(req: Request, res: Response): Promise<void> {
        try {
            const id = 'test'
            const date = Date.now()
            const like = 0
            const view = 0
            const { message, email, username, anonymous } = req.body
    
            const status = "succes"
            const data = { id, date, like, view, message, email, username, anonymous }
            res.status(200).json({ status, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // PUT /api/vi/thoughts/:id
    public async updateThoughyById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const { message, email, username, anonymous } = req.body
        try {

            const status = "succes"
            const data = { id, message, email, username, anonymous }
            res.status(200).json({ status, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // DELETE /api/vi/thoughts/:id
    public async deleteThoughtById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        try {

            const status = "succes"
            const data = { message: `Deleted: ${id}`}
            res.status(200).json({ status, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }    
}

export default ThoughtsController;