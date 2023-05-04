import { Request, Response } from 'express';
import getErrorMessage from '../utils/errorHandle';
import db from '../db/index';
import { v4 as uuidv4 } from 'uuid';

export class ThoughtsController {
    // GET /api/vi/thoughts
    public async getAllThoughts(req: Request, res: Response) {
        try {
            // query
            const results = await db.query('select * from thought')

            const status = "succes"
            const length = results.rows.length
            const data = results.rows
            res.status(200).json({ status, length, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // GET /api/vi/thoughts/:id
    public async  getThougtById(req: Request, res: Response) {
        try {
            // query
            const text = "select * from thought where id = $1"
            const value = [req.params.id]
            const results = await db.query(text, value)

            const status = "succes"
            const data = results.rows[0]
            res.status(200).json({ status, data })

        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // POST /api/vi/thoughts
    public async postThought(req: Request, res: Response): Promise<void> {
        try {
            const id = uuidv4()
            const date = new Date(Date.now())
            const like = 0
            const view = 0
            
            // query
            const text = 'INSERT INTO thought (id, message, email, username, date, "like", view, anonymous) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
            const value = [id, req.body.message, req.body.email, req.body.username, date, like, view, req.body.anonymous]
            const results = await db.query(text, value)

            const status = "succes"
            const data = results
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