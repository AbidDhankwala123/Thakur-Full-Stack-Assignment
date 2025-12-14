const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode ? error.statusCode : 500;
    const errorMessage = error.message ? error.message : "Something went wrong! Please try again after some time";

    res.status(statusCode).json({ errorMessage });
}


module.exports = errorHandler