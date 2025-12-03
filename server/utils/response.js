export const sendError = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: true,
    msg: message,
  });
};