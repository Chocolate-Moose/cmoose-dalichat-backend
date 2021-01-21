import { Router } from 'express';

const router = Router();

// define the routes
router.route('/signup').post();
router.route('/signin').post();
router.route('/validate').post();

// sign up a new user
router.route('/signup').post((req, res) => {
  return res.status(200).json({ message: 'signing up new user' });
});

// sign in an existing user
router.route('/signin').post((req, res) => {
  return res.status(200).json({ message: 'signing in an existing user' });
});

// return information about a user
router.route('/validate').post((req, res) => {
  return res.status(200).json({ message: 'returning information about a user' });
});

export default router;
