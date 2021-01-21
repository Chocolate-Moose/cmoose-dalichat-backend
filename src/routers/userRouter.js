import { Router } from 'express';

const router = Router();

// define the routes
router.route('/').get();
router.route('/:id').get().put().delete();

// fetch all users
router.route('/').get((req, res) => {
  return res.status(200).json({ message: 'fetching all users...' });
});

// fetch user by id
router.route('/:id').get((req, res) => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `fetching user with id ${id}` });
});

// update user by id
router.route('/:id').put((req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  return res
    .status(200)
    .json({ message: `updating user with id ${id} with new info ${content}` });
});

// remove user by id
router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `deleting user with id ${id}` });
});

export default router;
