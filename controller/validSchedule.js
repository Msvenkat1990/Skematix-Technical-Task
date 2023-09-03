const validSchedule = require("../models/dataSchema");

const scheduleValidation = async(req,res)=>{
    function isScheduleValid(newSchedule, previousSchedules) {
        for (const schedule of previousSchedules) {
            if (
                newSchedule.dayOfWeek === schedule.dayOfWeek &&
                (
                    (newSchedule.fromHour >= schedule.fromHour && newSchedule.fromHour < schedule.toHour) ||
                    (newSchedule.toHour > schedule.fromHour && newSchedule.toHour <= schedule.toHour) ||
                    (newSchedule.fromHour <= schedule.fromHour && newSchedule.toHour >= schedule.toHour)
                )
            ) {
                return "Schedule overlaps with existing record";
            }
            
            if (newSchedule.toHour <= newSchedule.fromHour) {
                return "To hour should be after from hour";
            }
        }
        
        return "Valid";
    }
    const newSchedule = req.body.newSchedule;
    const previousSchedules = req.body.previousSchedules;

    const validationMessage = isScheduleValid(newSchedule, previousSchedules);
  
    console.log(isScheduleValid(newSchedule, previousSchedules)); // Valid
    const data = new validSchedule({
        validElement: validationMessage,
      });
      try {
        const saveData = await data.save();
        res.json(saveData);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
    

}
module.exports = { scheduleValidation }
