const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: { type: String, select: false },
    status: { type: Number, enum: [0, 1], default: 1 }

},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema)