const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "json";



var registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await db.User.findOne({
    where: {
      email: email,
    },
  });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await db.User.create({
    email: email,
    password: hashedPassword,
    name: name,
  });

  console.log(newUser);
  res.status(201).json({ status: "Success", message: "User registered successfully" });
};



var loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    // const name=data[0].name;
    const token = jwt.sign(
      // {name},
      { email: user.email, id: user.id, name: user.name },
      SECRET_KEY,
      { expiresIn: "12h" }
    );
    // res.cookie('token',token)
    // res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ status: "Success", token, message:"You Have Login successfully " });
  } else {
    res
      .status(401)
      .json({
        message: "Authentication failed",
        Error: "password does not match",
      });
  }
};

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    console.log(req.user)
    // req.name = decoded.user;
    next();
  });
}


var addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const data = db.User.build({
    name: name,
    email: email,
    password: hashedPassword,
  });
  await data.save();
  console.log("Data saved in the database");
  console.log(data.toJSON());
  res.status(200).json(data.toJSON());
};

var getUsers = async (req, res) => {
  const data = await db.User.findAll({});
  res.status(200).json({ data: data });
};

var getUser = async (req, res) => {
  const userId = req.params.id;
  const data = await db.User.findOne({
    where: {
      // id: req.params.id,
      id: userId,
    },
    include: [{ model: MealPlan, as: 'MealPlans' }] // Include associated meal plans
  });
  res.status(200).json({ data: data });
};
var postUser = async (req, res) => {
  var postData = req.body;
  //if we want to send multiple data attime we use bulkcreate
  if (postData.length > 1) {
    var data = await db.User.bulkCreate(postData);
  } else {
    var data = await db.User.create(postData);
  }
  res.status(200).json({ data: data });
};
var deleteUser = async (req, res) => {
  const data = await db.User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};
var patchUser = async (req, res) => {
  var updatedata = req.body;
  const data = await db.User.update(updatedata, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};







module.exports = {
  addUser,
  getUsers,
  getUser,
  postUser,
  deleteUser,
  patchUser,
  loginUser,
  registerUser,
  verifyToken,
  
 
};























// const getUserMeal = async (req,res)=>{
//   const data = await User.findAll({
//     include:[{
//       model:Meal,
//       as:'Meals'

//     }],
//     where: {id:3}
//   })
// }

// const getUserMeal = async (req, res) => {
//   try {
//     const userId = 1; // Change this to the user ID you want to retrieve meals for

//     const userWithMeals = await User.findOne({
//       where: { id: userId },
//       include: [{ model: Meal, as: 'Meals' }],
//     });

//     if (!userWithMeals) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json(userWithMeals);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };





