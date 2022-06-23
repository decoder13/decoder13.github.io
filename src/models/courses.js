const mongoose = require('mongoose');

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    teacher: {
        type: String,
        required: true
    },

    level: {
        type: String,
        required: true
    }

})

const Courses = mongoose.model('Courses', courseSchema);

module.exports.Courses = Courses