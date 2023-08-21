const expres = require('express');
const app = expres();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const SocialPost = require('social-post-api');
const API_KEY = process.env.ARYSHARE;
const social = new SocialPost(API_KEY);

const pinterestPostResponse = () => {
  return {
    post: 'This is a test Post for Max',
    platforms: ['pinterest'],
    mediaUrls: [
      'https://ik.imagekit.io/hw4mk2vrzim/restaurant_Q_iroK7gxap.jpg?updatedAt=1643227525889',
    ],
  };
};

const run = async () => {
  try {
    const response = await social.post(pinterestPostResponse());
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

run();
