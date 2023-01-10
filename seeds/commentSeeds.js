const { Comment } = require('../models');

// creating comment data
const commentData = [
    {
        user_id: 1,
        blog_id: 2,
        comment: "Coding is fun...:)!"
    },
    {
        user_id: 2,
        blog_id: 1,
        comment: "Hopefully my code is good!"
    },


]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;