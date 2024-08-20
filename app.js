import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from './src/middleware/logger.js'; // Import custom logger middleware

import indexRouter from './src/routes/index.js';
import usersRouter from './src/routes/users.js';

// Get the directory name from the URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

// Use middleware
app.use(logger); // Use custom logger middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Set up routes
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
