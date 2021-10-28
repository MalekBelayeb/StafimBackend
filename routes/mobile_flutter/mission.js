const { Router } = require('express');
const router = Router();
const missionController = require('../../controllers/mobile_flutter/MissionController')

router.post("/updateMission",missionController.updateMission)
router.post("/getAllMissionsByChauffeur",missionController.getAllMissionsByChauffeur)


module.exports = router;