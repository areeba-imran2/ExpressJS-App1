// // import express from 'express';
// // const router = express.Router();

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// // export default router;


// import express from 'express';
// import { home, search } from '../controllers/searchController.js';

// const router = express.Router();

// // Home page route
// router.get('/', home);

// // Search route
// router.get('/search', search);

// export default router;


import express from 'express';
import { home, search } from '../controllers/searchController.js';

const router = express.Router();

router.get('/', home);
router.get('/search', search);

export default router;
