[![CircleCI](https://circleci.com/gh/daddychukz/developers-connect.svg?style=svg)](https://circleci.com/gh/daddychukz/developers-connect)

# developers-connect
A platform for developers to connect. They can create their portofolio by adding their experience, education, skills and other important information of their professional career.

Users can also create small posts and like/dislike and comment on other posts.

Live Link: https://developers-connect.herokuapp.com/

### Tools Used
- Javascript/React
- MongoDB
- Node
- ExpressJS
- Passport

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```