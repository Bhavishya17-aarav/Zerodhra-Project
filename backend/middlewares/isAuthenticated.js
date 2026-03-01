import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
try {
  const token = req.cookies.token
  if(!token){
    return res.status(400).json({
      message:"user not authenticated",
      success:false
    })
  }
  const decode =  await jwt.verify(token, process.env.SECRET_KEY);
  if(!decode){
    return res.status(400).json({
      message:"invalid token",
      success:false
    })
  }
  req.userId  = decode.userId;
  next();
} catch (error) {
  return res.status(500).json({
    message:error.message
  })
}
}

export default isAuthenticated;
