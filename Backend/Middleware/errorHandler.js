const notFound = (req, res, next) => {
  const error = new Error(`Not Found-${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: error.message,
    // stack: process.env.NODE_ENV === 'production' ? null : error.stack
  });
  return
};

export { notFound, errorHandler };
