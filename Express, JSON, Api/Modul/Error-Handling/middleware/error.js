const errorHandler = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({
        status: false,
        name: error.name,
        msg: error.message
    });
    next();
}

module.exports = {
    errorHandler,
}