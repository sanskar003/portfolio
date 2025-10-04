const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.error(
    `[ERROR] ${new Date().toISOString()}`,
    err.message,
    "\nStack:",
    err.stack
  );

  res.status(statusCode).json({
    message: "something went wrong 💥",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
};

export default errorHandler;
