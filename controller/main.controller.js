module.exports.mostImportantQuery = async (req,res,next) => {
  res.status(418).send('This server is in fact a teapot, so no coffee for you');
}