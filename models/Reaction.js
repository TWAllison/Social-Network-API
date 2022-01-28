const { Schema, Types } = require('mongoose');


const reactionScheama = new schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.OblectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlenght: 300
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports =reactionScheama;