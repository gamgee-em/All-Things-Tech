const db = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  // clean database
  try {
      
    await User.deleteMany({});
    await Post.deleteMany({});

    const users = await User.insertMany(userData);
    const posts = await Post.insertMany(postData);

    console.log('all done!');
    process.exit(0);

  } catch (err) {
    throw err;
  }

});
