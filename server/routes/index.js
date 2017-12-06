const router = require('express').Router()
const articleController = require('../controllers/articleController')


router.get('/', articleController.findAll)
router.get('/blog/:id', articleController.findOne)
router.post('/', articleController.create)
router.put('/:id', articleController.update)
router.delete('/:id', articleController.destroy)

module.exports = router
