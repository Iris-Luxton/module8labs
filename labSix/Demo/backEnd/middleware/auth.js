function verifyUser (req, res, next) {
    const bearerHeader = req.headers["username"];

    if (bearerHeader.length === 0) {
        res.status(403).json({
            error: "Invalid user",
            });
      } else {
        next();
        }    
}
  