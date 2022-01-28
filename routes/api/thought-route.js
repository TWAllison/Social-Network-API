const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
    getThoughtById
} = require('../../controllers/though-controllers');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:ThoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionsId').delete(removeReaction);

module.exports = router;