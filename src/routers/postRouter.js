import { Router } from 'express';

const router = Router();

// define the routes
router.route('/').get().post();
router.route('/:id').get().put().delete();
router.route('/user/:uid').get();
router.route('/like/:id').post();

// fetch all posts
router.route('/').get((req, res) => {
  return res.status(200).json({ message: 'fetching all posts...' });
});

// create new post
router.route('/').post((req, res) => {
  const { content } = req.body;
  return res
    .status(200)
    .json({ message: `creating new post with content ${content}` });
});

// fetch post by id
router.route('/:id').get((req, res) => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `fetching post with id ${id}` });
});

// update post by id
router.route('/:id').put((req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  return res
    .status(200)
    .json({ message: `updating post with id ${id} with new content ${content}` });
});

// remove post by id
router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `deleting post with id ${id}` });
});

// fetch posts of user with given uid
router.route('/user/:uid').get((req, res) => {
  const { uid } = req.params;
  return res
    .status(200)
    .json({ message: `fetching posts of user with uid ${uid}` });
});

// like post with given id with uid passed in req.body
router.route('/like/:id').post((req, res) => {
  const { id } = req.params;
  const { uid } = req.body;
  return res
    .status(200)
    .json({ message: `user with uid ${uid} likes post with id ${id}` });
});

export default router;
