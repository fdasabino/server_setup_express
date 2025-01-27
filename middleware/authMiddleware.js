module.exports = (req, res, next) => {
  const user = true;

  if (user) {
    console.log("User is authenticated");
    next();
  } else {
    res.status(401).json({ message: "User is not authenticated" });
  }
};
