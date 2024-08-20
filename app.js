import express from 'express';
import path from 'path';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Import routers
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('views', path.join(path.dirname(''), 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.dirname(''), 'public')));

// Use routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Start the server and log a message
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;





// import express from 'express';
// import path from 'path';
// import createError from 'http-errors';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';

// import indexRouter from './routes/index.js';
// import usersRouter from './routes/users.js';

// const app = express();

// // view engine setup
// app.set('views', path.join(path.dirname(''), 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// // Add Middleware: Use middleware functions to handle requests.
// app.use(express.json()); //for parsing JSON bodies
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(path.dirname(''), 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

// const port = process.env.PORT || 3000;

// // Start the server and log a message
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// export default app;
