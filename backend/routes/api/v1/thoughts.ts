import { Router } from 'express'
import ThoughtsController from '../../../controller/thoughtsController'

const router = Router()
const thoughtsController = new ThoughtsController()

router.get('/', thoughtsController.getAllThoughts)
router.get('/:id', thoughtsController.getThougtById)

router.post('/', thoughtsController.postThought)

router.put('/:id', thoughtsController.updateThoughyById)

router.delete('/:id', thoughtsController.deleteThoughtById)

export default router