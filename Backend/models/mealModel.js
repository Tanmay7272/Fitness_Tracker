
//meal = tablename and mealplan = database
module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define("Meal", {
        addMeal: {
            type: DataTypes.STRING
        },
        protein: {
            type: DataTypes.INTEGER
        },
        calories: {
            type: DataTypes.INTEGER
        },
        
       
    },{
        timestamps: false
    })
    
    return Meal;    

}