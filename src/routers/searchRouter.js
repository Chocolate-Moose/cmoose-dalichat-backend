import { Router } from 'express';

const router = Router();

// define the routes
router.route('/posts').get();
router.route('/users').get();

// search for posts
router.route('/posts').get((req, res) => {
  return res.status(200).json({ message: 'searching for a post...' });
});

// search for users
router.route('/users').get((req, res) => {
  return res.status(200).json({ message: 'searching for a user...' });
});

export default router;
