const { Schema, model, trusted } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtScheam = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You must leave a Thought!',
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: trusted,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

thoughtScheam.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;