const moveEle = require("../models/dataSchema");

const moveElementToLeft = async(req,res) =>{
    function moveArrayToLeft(arr) {
        if (arr.length <= 1) {
          return arr; // No need to move if array has 0 or 1 elements
        }
      
        const firstElement = arr.shift(); // Remove the first element and store it
        arr.push(firstElement); // Add the first element to the end of the array
      
        return arr;
      }
      
      const inputArray = req.body.moveArr;
      const shiftedArray = moveArrayToLeft(inputArray);
      const data = new moveEle({
        moveElement: shiftedArray,
      });
      try {
        const saveData = await data.save();
        res.json(saveData);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
}
module.exports = { moveElementToLeft }