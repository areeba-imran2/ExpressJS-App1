// import express from 'express';
// import { getUserProfile } from '../controllers/userController.js';

// const router = express.Router();

// // User profile route
// router.get('/profile/:id', getUserProfile);

// export default router;



// // import express from 'express';
// // const router = express.Router();

// // /* GET home page. */
// // router.get('/', (req, res, next) => {
// //   res.render('index', { title: 'Express' });
// // });

// // export default router;


import express from 'express';
import { getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:id', getUserProfile);

export default router;
