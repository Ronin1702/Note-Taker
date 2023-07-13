// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
  try {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'DELETE': {
        console.info(`📕 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'USE': {
        console.info(`📒 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
    }
  } finally {
    next();
  }
};

exports.clog = clog;

