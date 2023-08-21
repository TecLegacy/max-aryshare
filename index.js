const expres = require('express');
const app = expres();
const cors = require('cors');

app.use(cors());

const SocialPost = require('social-post-api');
const API_KEY = 'QC9JFAM-8DZM3F1-Q4KMVF5-QW7YQ8W';
const social = new SocialPost(API_KEY);

const pinterestPostResponse = () => {
  return {
    post: 'first post :https://www.espn.in/football/story/_/id/38232851/mason-greenwood-leave-man-united-club-investigation',
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
