const findLarEle = require("../models/dataSchema");

const getThirdLargest = async(req,res) =>{
    function findThirdLargest(arr) {
        if (arr.length < 3) {
          return "Array should have at least three elements";
        }
      
        const sortedArr = arr.slice().sort((a, b) => b - a);
        return sortedArr[2];
      }
      
      const inputArray = req.body.inputArr;
      const thirdLargest = findThirdLargest(inputArray);
      const data = new findLarEle({
        largestElement: thirdLargest,
      });
      try {
        const saveData = await data.save();
        res.json(saveData);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
}
module.exports = { getThirdLargest }