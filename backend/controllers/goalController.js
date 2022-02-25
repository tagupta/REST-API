const asyncHandler = require('express-async-handler');

// @desc Get goals
// route GET api/goals
// access private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'get goals'});
})

// @desc Set goals
// route POST api/goals
// access private
const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }
    console.log(req.body);
    res.status(200).json({message: 'Set goal'});
})

// @desc Update goals
// route PUT api/goals/:id
// acceess private
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
})

// @desc Delete goals
// route DELETE api/goals/:id
// acceess private
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal, 
}