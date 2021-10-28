const { Router } = require('express');
const router = Router();
const loginController = require('../../controllers/mobile_flutter/AuthController')

router.post("/signInChauffeur",loginController.signInChauffeur)
router.post("/signUpChauffeur",loginController.signUpChauffeur)
router.post("/UpdateChauffeur",loginController.UpdateChauffeur)
router.post("/deleteAccountChauffeur",loginController.deleteAccountChauffeur)

module.exports = router;