const calculateMatchEl = require("../models/dataSchema");


const calculateMatchArr = async(req,res)=>{
    function calculateMatchingScore(arr1, arr2) {
        // Calculate the common elements
        const commonElements = arr1.filter(element => arr2.includes(element));
      
        // Calculate the total unique elements
        const uniqueElements = [...new Set([...arr1, ...arr2])];
      
        // Calculate the matching score
        const matchingScore = (commonElements.length / uniqueElements.length) * 100;
      
        // Round off to the nearest whole number
        const roundedScore = Math.round(matchingScore);
      
        return roundedScore;
      }
      
      // Example usage
      const array1 = req.body.Arr1;
      const array2 = req.body.Arr2;
      const score = calculateMatchingScore(array1, array2);
      const data = new calculateMatchEl({
        calculateNoArr: score,
      });
      try {
        const saveData = await data.save();
        res.json(saveData);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
}

module.exports = { calculateMatchArr }
 
  