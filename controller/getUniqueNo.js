const uniqueArray = require("../models/dataSchema")

const getUniqueNo = async (req, res) => {
    function findUniqueElements(arr) {
      const uniqueElements = [];
      const elementCount = {};
  
      for (const num of arr) {
        if (elementCount[num]) {
          elementCount[num]++;
        } else {
          elementCount[num] = 1;
        }
      }
  
      for (const num in elementCount) {
        if (elementCount[num] === 1) {
          uniqueElements.push(num);
        }
      }
  
      return uniqueElements;
    }
  
    const inputArray = req.body.array; 
    const uniqueValues = findUniqueElements(inputArray);
  
    const data = new uniqueArray({
      uniqueNo: uniqueValues,
    });
  
    try {
      const saveData = await data.save();
      res.json(saveData);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving the data.' });
    }
  };
  
  module.exports = { getUniqueNo }
