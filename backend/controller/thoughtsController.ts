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
    public async postThought(req: Request, res: Response): Promise<Response> {
        try {
            // validation
            if (req.body.message.trim().length < 5) {
                return res.status(400).json({ message: 'Message must be at least 5 characters long' })
            }
            const id = uuidv4()
            const date = new Date(Date.now())
            const like = 0
            const view = 0
            
            // query
            const text = 'INSERT INTO thought (id, message, email, username, date, "like", view, anonymous) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *'
            const value = [id, req.body.message, req.body.email, req.body.username, date, like, view, req.body.anonymous]
            const results = await db.query(text, value)

            const status = "succes"
            const data = results.rows[0]
            return res.status(200).json({ status, data })
        } catch (error: unknown) {
            return res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // PUT /api/vi/thoughts/:id
    public async updateThoughyById(req: Request, res: Response): Promise<void> {

        try {
            const { id } = req.params
            const {message, anonymous } = req.body
            
            // query
            const text = 'UPDATE thought SET message = $1, anonymous = $2, lastEdited = CURRENT_TIMESTAMP WHERE id = $3 returning *';
            const value = [message, anonymous, id]
            const results = await db.query(text, value)

            const status = "succes"
            const data = results.rows[0]
            res.status(200).json({ status, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }
    
    // DELETE /api/vi/thoughts/:id
    public async deleteThoughtById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params

            // query
            const text = 'DELETE FROM thought WHERE id = $1';
            const value = [id]
            await db.query(text, value)

            const status = "succes"
            const data = { message: `Deleted: ${id}`}
            res.status(200).json({ status, data })
        } catch (error: unknown) {
            res.status(500).json({ message: getErrorMessage(error) })
        }
    }    
}

export default ThoughtsController;