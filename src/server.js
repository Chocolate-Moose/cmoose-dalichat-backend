import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import {
  authRouter, postRouter, searchRouter, userRouter,
} from './routers';

// Initialize Express app
const app = express();

// Enable json message body for posting data to router
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable / disable cross origin resource sharing if necessary
app.use(cors());

// Load config vars from ".env" files
dotenv.config();

// Enable / disable http request logging
app.use(morgan('dev'));

// mongo stuff
const { mongoURI } = process.env;
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on('open', (ref) => {
  console.log('Connected to mongo');
});

mongoose.connection.on('error', (err) => {
  console.log('Could not connect to mongo! ');
  return console.log(err);
});

// posts endpoint
app.use('/posts', postRouter);

// user endpoint
app.use('/users', userRouter);

// search endpoint
app.use('/search', searchRouter);

// auth endpoint
app.use('/auth', authRouter);

// handle server root url
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to dalichat backend :)' });
});

// Custom 404 middleware
app.use((_req, res) => {
  res.status(404).json({ message: 'The route you\'ve requested doesn\'t exist' });
});

// Initialize server
const port = process.env.PORT;
// || constants.DEFAULT_PORT;
const server = app.listen(port);
console.log(`listening on: ${port}`);

export default server;
