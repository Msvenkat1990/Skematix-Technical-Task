var express = require('express');
const { getUniqueNo } = require('../controller/getUniqueNo');
const { getDate } = require('../controller/daysCalculation');
const { getThirdLargest } = require('../controller/largestElement');
const { moveElementToLeft } = require('../controller/moveElement');
const { scheduleValidation } = require('../controller/validSchedule');
const { calculateMatchArr } = require('../controller/calculateMatchNo');
const { registerUser, loginUser } = require('../controller/registerLogin');
const { getCampus, editCampus, addCampus, removeCampus } = require('../controller/campusController');
const { getBuilding, addBuilding, editBuilding, removeBuilding } = require('../controller/buildingCampus');
var router = express.Router();

//Router path
router.post('/Create/getUniqueNo',getUniqueNo );
router.post('/Create/getDate',getDate );
router.post('/Create/getThirdLargest',getThirdLargest);
router.post('/Create/moveElementToLeft',moveElementToLeft);
router.post('/Create/scheduleValidation',scheduleValidation);
router.post('/Create/calculateMatchArr',calculateMatchArr);

//User Register and Login
router.post('/Register',registerUser);
router.post('/Login',loginUser);

//Campus 
router.get('/Campus/get',getCampus);
router.post('/Campus/create',addCampus);
router.put('/Campus/edit/:id',editCampus);
router.delete('/campus/delete/:id', removeCampus);


//building
router.get('/Building/get',getBuilding);
router.post('/Building/create',addBuilding);
router.put('/Building/edit/:id',editBuilding);
router.delete('/Building/delete/:id', removeBuilding);













module.exports = router;
