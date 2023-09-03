const daysCal = require("../models/dataSchema")


const getDate = async(req,res) =>{
    function calculateDateDifference(date1, date2) {
        const [year1, month1, day1] = date1.split('-').map(Number);
        const [year2, month2, day2] = date2.split('-').map(Number);
      
        const daysInYear1 = day1 + (month1 - 1) * 30 + (year1 - 1) * 12 * 30;
        const daysInYear2 = day2 + (month2 - 1) * 30 + (year2 - 1) * 12 * 30;
      
        return daysInYear2 - daysInYear1;
      }
      const date1 = req.body.Date1;
      const date2 = req.body.Date2;
      const difference = calculateDateDifference(date1, date2);
      const data = new daysCal({
        days: difference,
      });
      try {
        const saveData = await data.save();
        res.json(saveData);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
}

module.exports = { getDate }
