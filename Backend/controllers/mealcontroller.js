const db = require('../config/db')

const MealPlan = db.Meal

//create MealPlan
const createMealPlan = async (req, res) => {
  try {
    const { addMeal,protein, calories, dietPlan } = req.body;
   
    const newMealPlan = await MealPlan.create({
      addMeal,
      protein,
      calories,
      dietPlan,
    });
    res.status(201).json({
      status: 'Success',
      message: 'Meal plan added successfully.',
      data: newMealPlan,
    });
    console.log(newMealPlan);
  } catch (error) {
    console.error(error);
    console.log(error)
    res.status(500).json({ status: 'Error', message: 'Internal server error' });
  }
};

//get MeaPlan
function getMealplanById(req,res){
  MealPlan.findByPk(req.params.id).then(data =>{
      res.send(data)
   }).catch(error => {
      res.send(500).send(error)
   })
  
}

//Update MealPlan
function updateMealPlan(req, res) {
  const newData = {
    
    protein: req.body.protein,
    calories: req.body.calories,
    dietPlan: req.body.dietPlan,

  }
  MealPlan.update(newData,
    { where: { id: req.body.id } }
  ).then((data) => {
    res.send("Data Updated for id" + req.body.id)
  }).catch(error => {
    res.status(500).send(error)
  })
};

//delete MealPlan
function deleteMealPlan(req, res) {
  const mealPlanId = req.params.id;

  MealPlan.destroy({
    where: { id: mealPlanId }
  })
    .then(() => {
      res.send("Data deleted for id: " + mealPlanId);
      console.log(mealPlanId)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    });
}



module.exports = { createMealPlan, updateMealPlan, deleteMealPlan,getMealplanById }