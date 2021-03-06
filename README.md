# React Firebase

This repo is all about firebase service implementation in React, with Backendless Architecture.

#### Getting Started 

To run this repo, run this:

```bash
npm install
npm start
```

If it didn't work, try to remove the `firebase` library first, then run this:

```bash
npm install firebase
```

#### Environment Variable

And also, this repo is using `.env` and these are what you should insert:

```
REACT_APP_FIREBASE_API_KEY="Your Firebase API Key"
REACT_APP_FIREBASE_AUTH_DOMAIN="Your Firebase Auth Domain"
REACT_APP_FIREBASE_DATABASE_URL="Your Firebase Database URL"
REACT_APP_FIREBASE_PROJECT_ID="Your Firebase Project ID"
REACT_APP_FIREBASE_STORAGE_BUCKET="Your Firebase Storage Bucket"
REACT_APP_FIREBASE_MESSENGER_SENDER_ID="Your Firebase Messenger Sender ID"
REACT_APP_FIREBASE_APP_ID="Your Firebase APP ID"
REACT_APP_FIREBASE_MEASUREMENT_ID="Your Firebase Measurement ID"
```

#### Pages 

| URL            | Description                                                          |
|----------------|----------------------------------------------------------------------|
| `/`            | Home Page, will show you the welcome message, and also logout button |
| `/login`       | Login Page, login form for Firebase Authentication.                  |
| `/register`    | Register Page, form to create new user in Firebase.                  |
| `/post`        | Post Page, will show you the latest post created.                    |
| `/post/create` | Create Post Page, will show you a form to create new post.           |

Happy Hacking!
