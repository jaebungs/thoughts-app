import supertest from 'supertest'
import app from '../app'

const request = supertest(app);

describe('ThoughtsController', () => {

    describe('GET /api/v1/thoughts', () => {
        it('should return all thoughts --> Array of Objects', async () => {
            const response = await request.get('/api/v1/thoughts')
            expect(response.status).toBe(200)
            expect(response.body.data).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(String),
                        message: expect.any(String),
                        email: expect.any(String),
                        username: expect.any(String),
                        date: expect.any(String),
                        like: expect.any(Number),
                        view: expect.any(Number),
                        mood: expect.any(Number),
                        anonymous: expect.any(Boolean),
                        lastedited: expect.any(String)
                    })
                ])
            )
        })

        // it('should handle errors', async () => {

        // })
    })

    // describe('GET /api/v1/thoughts/:id', () => {
    //     it('should rturn a thought by ID --> Object', async () => {

    //     })

    //     it('should handle errors', async () => {

    //     })
    // })
})