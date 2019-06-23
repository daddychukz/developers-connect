import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import users from './routes/api/users';
import profile from './routes/api/profile';
import posts from './routes/api/posts';
import { mongoURI } from './config/keys';

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
