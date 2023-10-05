const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userController = require("../Backend/controllers/userController");
const mealController = require("../Backend/controllers/mealcontroller")
const { verifyToken } = require("../Backend/controllers/userController"); 
require("../Backend/config/db")
// const { body, validationResult } = require("express-validator");
// const { check } = require("express-validator");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({origin: "http://localhost:3000"} )); 

app.get("/", verifyToken, (req, res) => {
  return res.json({ status: "Success", user: req.user });
});

//  const validatechain = [
//   body("username")
//     .notEmpty()
//     .isLength({ min: 2 })
//     .withMessage("Name is required"),
//   body("email").isEmail().withMessage("Invalid email format"),
//   body("password").isLength({ min: 6 }),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next()
//   },
// ];

 


// CRUD routes for users
app.post("/users",userController.addUser);
app.get("/users", userController.verifyToken, userController.getUsers);
app.get("/users/:id", userController.getUser);
app.put("/users/:id", userController.patchUser);
app.delete("/users/:id", userController.deleteUser);
app.post("/login", userController.loginUser);
app.post("/registration",userController.registerUser);



// CRUD routes for Meal
app.get("/meals/:id",mealController.getMealplanById)
app.post("/meals",mealController.createMealPlan)
app.put("/meals/:id",mealController.updateMealPlan)
app.delete("/meals/:id",mealController.deleteMealPlan)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

